import { TextField } from "formik-mui";
import { Field, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, MenuItem, Stack } from "@mui/material";

import { CollectionInterface } from "../../common/interfaces";
import CardWrapper from "../cardWrapper";
import { useAppDispatch } from "../../services/store/hooks";
import { requestChangeCollection } from "../../services/store/collections/collectionsActions";
import TranslatedText from "../translatedText";
import { CollectionTypes } from "../../common/renderData";

const CollectionSchema = Yup.object().shape({
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

export default function ChangeCollectionForm(props: {
  collection: CollectionInterface;
  callback: () => void;
}) {
  const {
    userId,
    id,
    type,
    name,
    description,
    textField1Name,
    textField2Name,
    textField3Name,
    numberField1Name,
    numberField2Name,
    numberField3Name,
  } = props.collection;

  const initialValues = {
    name,
    type,
    description,
    textField1Name,
    textField2Name,
    textField3Name,
    numberField1Name,
    numberField2Name,
    numberField3Name,
  };

  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(
          requestChangeCollection({
            userId,
            id,
            ...values,
          })
        );
        props.callback();
      }}
      validationSchema={CollectionSchema}
    >
      {({ handleSubmit }) => (
        <CardWrapper>
          <Stack component="form" spacing={1} onSubmit={handleSubmit}>
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
                <MenuItem value={type} key={type}>
                  <TranslatedText text={type} />
                </MenuItem>
              ))}
            </Field>

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
            <Button
              color="inherit"
              type="submit"
              className="btn btn-primary"
              onSubmit={(ev) => ev.preventDefault()}
            >
              <TranslatedText text="save" />
            </Button>
          </Stack>
        </CardWrapper>
      )}
    </Formik>
  );
}
