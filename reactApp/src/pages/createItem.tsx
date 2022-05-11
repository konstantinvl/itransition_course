import { TextField } from "formik-mui";
import { Field, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Box, Stack } from "@mui/material";
import TranslatedText from "../components/translatedText";

import { useAppDispatch, useAppSelector } from "../services/store/hooks";

import { CollectionInterface } from "../common/interfaces";
import { selectCollectionByID } from "../services/store/collections/colectionsReduser";
import { useParams } from "react-router-dom";
import { requestCreateItem } from "../services/store/items/itemsActions";

export const ItemSchema = Yup.object().shape({
  name: Yup.string().required(),
  textField1Value: Yup.string(),
  textField2Value: Yup.string(),
  textField3Value: Yup.string(),
  numberField1Value: Yup.number(),
  numberField2Value: Yup.number(),
  numberField3Value: Yup.number(),
});

export default function CreateCollection() {
  const initialValues = {
    name: "",
    textField1Value: "",
    textField2Value: "",
    textField3Value: "",
    numberField1Value: 0,
    numberField2Value: 0,
    numberField3Value: 0,
  };

  const dispatch = useAppDispatch();
  const collectionId = Number(useParams().collectionid);
  const state = useAppSelector((state) => state);
  const collection = selectCollectionByID(
    state,
    collectionId
  ) as CollectionInterface;

  const {
    textField1Name,
    textField2Name,
    textField3Name,
    numberField1Name,
    numberField2Name,
    numberField3Name,
  } = collection;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
        dispatch(
          requestCreateItem({
            userId: collection.userId,
            collectionId,
            ...values,
          })
        );
      }}
      validationSchema={ItemSchema}
    >
      {({ handleSubmit }) => (
        <Box
          component="form"
          sx={{ width: "70%", display: "flex" }}
          onSubmit={handleSubmit}
        >
          <Stack spacing={2} sx={{ flex: 1, mx: 0.5 }}>
            <legend>
              <TranslatedText text="createItem" />
            </legend>
            <Field
              type="text"
              id="name"
              name="name"
              label={<TranslatedText text="name" />}
              component={TextField}
            />

            {textField1Name && (
              <Field
                type="text"
                id="textField1Value"
                name="textField1Value"
                label={textField1Name}
                component={TextField}
              />
            )}
            {textField2Name && (
              <Field
                type="text"
                id="textField2Value"
                name="textField2Value"
                label={textField2Name}
                component={TextField}
              />
            )}
            {textField3Name && (
              <Field
                type="text"
                id="textField3Value"
                name="textField3Value"
                label={textField3Name}
                component={TextField}
              />
            )}

            {numberField1Name && (
              <Field
                type="text"
                id="numberField1Value"
                name="numberField1Value"
                label={numberField1Name}
                component={TextField}
              />
            )}
            {numberField2Name && (
              <Field
                type="text"
                id="numberField2Value"
                name="numberField2Value"
                label={numberField2Name}
                component={TextField}
              />
            )}
            {numberField3Name && (
              <Field
                type="text"
                id="numberField3Value"
                name="numberField3Value"
                label={numberField3Name}
                component={TextField}
              />
            )}

            <button
              type="submit"
              className="btn btn-primary"
              onSubmit={(ev) => ev.preventDefault()}
            >
              <TranslatedText text="create" />
            </button>
          </Stack>
        </Box>
      )}
    </Formik>
  );
}
