import {login} from "api/auth";
import {PATH_DASHBOARD} from "constants/paths";
import {useNavigate} from "react-router";
import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {setUser, setPermission} from "../../store/modules/auth"
import {useToast} from '@chakra-ui/react'
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props' 
import {GoogleLogin} from 'react-google-login';


export default function LoginPage(props : any) {
    const toast = useToast()
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");
    const dispatch = useDispatch();


    const onLogin = async () => {
        try {

            const request = {
                "data": {
                    "username": username,
                    "password": password
                },
                "type": 0
            };

            const rs = await login(request);

            navigateSuccess(rs);


        } catch (err) {
            toast({
                title: 'Chú ý !',
                description: "Mật khẩu không đúng",
                status: 'error',
                duration: 2000,
                isClosable: true
            })
            console.log(err);
        }
    };
    const responseFacebook = async (response : any) => {

        const request = {
            "data": {
                "email": response.email,
                "name": response.name,
                "id": response.id

            },
            "type": 1
        };

        const rs = await login(request);

        navigateSuccess(rs);

    };

    const responseGoogle = async (response : any) => {
        console.log("response google: ", response);
        const request = {
            "data": {
                "accessToken": response.accessToken
            },
            "type": 2
        };
        const rs = await login(request);
        navigateSuccess(rs);

    }

    const responseFailGoogle = async (response : any) => {
        console.log("failed response google: ", response);

    }

    const navigateSuccess = (rs : any) => {
        if (rs.userInfo.enable) {
            const user = rs.userInfo;
            const auth: any = {};

            auth.menus = rs.menu;
            auth.permissions = rs.permission;

            console.log("AUTH TRUOC KHI SET: ", auth);
            dispatch(setUser(user));
            dispatch(setPermission(auth));

            navigate(PATH_DASHBOARD);
        }

    }


    return (
        <> {/* start: page */}
            <section className="body-sign">
                <div className="center-sign">
                    <a href="/" className="logo float-left">
                        <img src="img/logo.png"
                            height={70}
                            alt="Porto Admin"/>
                    </a>
                    <div className="panel card-sign">
                        <div className="card-title-sign mt-3 text-end">
                            <h2 className="title text-uppercase font-weight-bold m-0"><i className="bx bx-user-circle me-1 text-6 position-relative top-5"
                                    onClick={onLogin}/>
                                Sign In</h2>
                        </div>
                        <div className="card-body">
                            <div>
                                <div className="form-group mb-3">


                                    <label>Username</label>
                                    <div className="input-group">
                                        <input value={username}
                                            onChange={
                                                e => setUsername(e.target.value)
                                            }
                                            name="username"
                                            type="text"
                                            className="form-control form-control-lg"/>
                                        <span className="input-group-text">
                                            <i className="bx bx-user text-4"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="clearfix">
                                        <label className="float-left">Password</label>
                                        <a href="pages-recover-password.html" className="float-end">Lost Password?</a>
                                    </div>
                                    <div className="input-group">
                                        <input value={password}
                                            onChange={
                                                e => setPass(e.target.value)
                                            }
                                            name="pwd"
                                            type="password"
                                            className="form-control form-control-lg"/>
                                        <span className="input-group-text">
                                            <i className="bx bx-lock text-4"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="checkbox-custom checkbox-default">
                                            <input id="RememberMe" name="rememberme" type="checkbox"/>
                                            <label htmlFor="RememberMe">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 text-end">
                                        <button onClick={onLogin}
                                            type="submit"
                                            className="btn btn-primary mt-2">Sign In</button>
                                    </div>
                                </div>
                                <span className="mt-3 mb-3 line-thru text-center text-uppercase">
                                    <span>or</span>
                                </span>
                                <div className="mb-1 text-center">

                                    <a className="btn btn-facebook mb-3 ms-1 me-1" href="#">
                                        <FacebookLogin appId="2179625492193375"
                                            autoLoad={true}
                                            fields="name,email,picture"
                                            callback={responseFacebook}
                                            cssClass="my-facebook-button-class"
                                            textButton="Connect with F"
                                            render={renderProps => (
                                              <button onClick={renderProps.onClick}>Connect with <i className="fab fa-facebook-f"></i></button>
                                            )}
                                            ></FacebookLogin>
                                    </a>


                                    {/* <a className="btn btn-twitter mb-3 ms-1 me-1" href="#"> */}
                                    <GoogleLogin clientId="503582948951-toguno93phafiv9kv4fd3pn9jos2stht.apps.googleusercontent.com" buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseFailGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        isSignedIn={true}

                                        render={
                                            renderProps => (
                                                <a className="btn btn-gplus mb-3 ms-1 me-1"
                                                    onClick={
                                                        renderProps.onClick
                                                }>Connect with &nbsp;<i className="fab fa-google"></i>
                                                </a>
                                            )
                                    }></GoogleLogin>

                                {/* </a> */} </div>
                            <p className="text-center">Don't have an account yet?
                                <a href="pages-signup.html">Sign Up!</a>
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-center text-muted mt-3 mb-3">© Copyright 2021. All Rights Reserved.</p>
            </div>
        </section>
        {/* end: page */} </>
    );
}
