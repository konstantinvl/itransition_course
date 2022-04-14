import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { AuthFormProps } from "../../common/interfaces";

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
        <legend>{title}</legend>
        <div className="mb-3">
          <label htmlFor="login" className="form-label">
            Login:
          </label>
          <Field type="text" id="login" name="login" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
