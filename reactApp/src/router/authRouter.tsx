import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AuthForm from "../components/authentification/authForm";
import { useAppDispatch } from "../services/store/hooks";
import {
  requestLoginUser,
  requestSignInUser,
} from "../services/store/user/userActions";

export default function AuthRouter() {
  const dispatch = useAppDispatch();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route index element={<Navigate to="login" />} />
        <Route
          path="login"
          element={
            <AuthForm
              title="Login"
              callback={(values) => {
                dispatch(requestLoginUser(values));
              }}
            />
          }
        />
        <Route
          path="signin"
          element={
            <AuthForm
              title="SignIn"
              callback={(values) => {
                console.log(values);
                dispatch(requestSignInUser(values));
              }}
            />
          }
        />
        <Route path="*" element={<Navigate to="login" />} />
      </Route>
    </Routes>
  );
}
