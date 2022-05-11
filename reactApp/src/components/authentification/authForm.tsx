import { TextField } from "formik-mui";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { AuthFormProps } from "../../common/interfaces";
import { Stack } from "@mui/material";

export const AuthSchema = Yup.object().shape({
  login: Yup.string().required(),
  password: Yup.string().required(),
});

export default function AuthForm(props: AuthFormProps) {
  const { title, callback } = props;
  const initialValues = { login: "", password: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        callback(values);
        actions.resetForm();
      }}
      validationSchema={AuthSchema}
    >
      <Form className="p-2">
        <Stack spacing={2}>
          <legend>{title}</legend>

          <Field
            type="text"
            id="login"
            name="login"
            label="Login"
            component={TextField}
          />

          <Field
            type="password"
            id="password"
            name="password"
            label="Password"
            component={TextField}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Stack>
      </Form>
    </Formik>
  );
}
