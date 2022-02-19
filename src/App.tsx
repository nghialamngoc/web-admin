import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import React from "react";
import routes from "routes";
import LoginPage from "pages/Login";
import Gateway from "Gateway";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/" element={<Layout />}>
            {routes.map((x, index) => {
              if (!x.guard) {
                return (
                  <Route
                    key={index}
                    path={x.path}
                    element={React.createElement(x.component)}
                  />
                );
              }

              return (
                <Route
                  key={index}
                  path={x.path}
                  element={<Gateway key={index} {...x}></Gateway>}
                />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
