import React from "react";
import { useAppDispatch, useAppSelector } from "../../services/store/hooks";
import * as Yup from "yup";
import { Stack, Typography } from "@mui/material";
import TranslatedText from "../translatedText";
import { TextField } from "formik-mui";
import { Field, Formik } from "formik";
import { requestCreateComment } from "../../services/store/comments/commentsActions";

const CommentSchema = Yup.object().shape({
  comment: Yup.string().required(),
});

export default function CommentForm(props: { itemId: number }) {
  const { itemId } = props;
  const user = useAppSelector((state) => state.user);

  const initialValues = {
    comment: "",
  };

  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(
          requestCreateComment({
            userId: user.id,
            itemId,
            ...values,
          })
        );
        actions.resetForm();
      }}
      validationSchema={CommentSchema}
    >
      {({ handleSubmit }) => (
        <Stack
          spacing={2}
          sx={{ flex: 0.7, mx: 0.5 }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            <TranslatedText text="newComment" />
          </Typography>
          <Field
            type="text"
            id="comment"
            name="comment"
            label={<TranslatedText text="comment" />}
            component={TextField}
          />

          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={(ev) => ev.preventDefault()}
          >
            <TranslatedText text="send" />
          </button>
        </Stack>
      )}
    </Formik>
  );
}
