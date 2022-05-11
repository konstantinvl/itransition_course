import { TextField } from "formik-mui";
import { Field, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Box, Button, MenuItem, Stack } from "@mui/material";
import TranslatedText from "../components/translatedText";
import { CollectionTypes } from "../common/renderData";
import { useAppDispatch, useAppSelector } from "../services/store/hooks";
import { requestCreateCollection } from "../services/store/collections/collectionsActions";
import { CollectionCreateInterface } from "../common/interfaces";

export const CollectionSchema = Yup.object().shape({
  name: Yup.string().required(),
  type: Yup.string().required(),
  description: Yup.string().required(),
  textField1Name: Yup.string(),
  textField2Name: Yup.string(),
  textField3Name: Yup.string(),
  numberField1Name: Yup.string(),
  numberField2Name: Yup.string(),
  numberField3Name: Yup.string(),
});

export default function CreateCollection() {
  const initialValues = {
    name: "",
    type: "",
    description: "",
    textField1Name: "",
    textField2Name: "",
    textField3Name: "",
    numberField1Name: "",
    numberField2Name: "",
    numberField3Name: "",
  };

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(
          requestCreateCollection({
            userId: user.id,
            ...values,
          } as CollectionCreateInterface)
        );
      }}
      validationSchema={CollectionSchema}
    >
      {({
        handleSubmit,

        /* and other goodies */
      }) => (
        <Box
          component="form"
          sx={{ width: "70%", display: "flex" }}
          onSubmit={handleSubmit}
        >
          <Stack spacing={2} sx={{ flex: 1, mx: 0.5 }}>
            <legend>
              <TranslatedText text="createCollection" />
            </legend>
            <Field
              type="text"
              id="name"
              name="name"
              label={<TranslatedText text="name" />}
              component={TextField}
            />
            <Field
              type="text"
              id="descriptione"
              name="description"
              multiline
              label={<TranslatedText text="description" />}
              component={TextField}
            />

            <Field
              type="select"
              id="Collection type"
              name="type"
              select
              label={<TranslatedText text="type" />}
              component={TextField}
            >
              {CollectionTypes.map((type) => (
                <MenuItem value={type}>
                  <TranslatedText text={type} />
                </MenuItem>
              ))}
            </Field>

            <Button
              type="submit"
              className="btn btn-primary"
              onSubmit={(ev) => ev.preventDefault()}
            >
              <TranslatedText text="create" />
            </Button>
          </Stack>
          <Stack spacing={2} sx={{ flex: 1, mx: 0.5 }}>
            <Field
              type="text"
              id="textField1Name"
              name="textField1Name"
              label={<TranslatedText text="textFieldName" />}
              component={TextField}
            />
            <Field
              type="text"
              id="textField2Name"
              name="textField2Name"
              label={<TranslatedText text="textFieldName" />}
              component={TextField}
            />
            <Field
              type="text"
              id="textField3Name"
              name="textField3Name"
              label={<TranslatedText text="textFieldName" />}
              component={TextField}
            />

            <Field
              type="text"
              id="numberField1Name"
              name="numberField1Name"
              label={<TranslatedText text="numberFieldName" />}
              component={TextField}
            />
            <Field
              type="text"
              id="numberField2Name"
              name="numberField2Name"
              label={<TranslatedText text="numberFieldName" />}
              component={TextField}
            />
            <Field
              type="text"
              id="numberField3Name"
              name="numberField3Name"
              label={<TranslatedText text="numberFieldName" />}
              component={TextField}
            />
          </Stack>
        </Box>
      )}
    </Formik>
  );
}
