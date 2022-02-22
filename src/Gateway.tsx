import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAppDispatch from "hooks/dispatch";
import { fetchUser } from "store/modules/auth";
import useMounted from "hooks/mounted";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

export default function Gateway({ path, component }: any) {
  const dispatch = useAppDispatch();
  const isMounted = useMounted();
  const navigate = useNavigate();

  // State
  const user = useSelector((x: any) => x.auth.user);
  const [fetched, setFetched] = useState(user && user.email);

  const getUser = useCallback(() => {
    try {    
      dispatch(fetchUser())      
        .then(unwrapResult)
        .then(() => {
         
          if (isMounted.current) {
           
            setFetched(true);
           
          }
         
        })
        .catch((err) => {
          console.log("gateway error: ", err);
          navigate("/login");
        });
    } catch (err) {}
  }, [dispatch, isMounted, navigate]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (fetched) {
    return React.createElement(component);
  }

  return <></>;
}
