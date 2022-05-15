import React from "react";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CardWrapper from "../cardWrapper";
import TranslatedText from "../translatedText";
import { CollectionInterface, ItemInterface } from "../../common/interfaces";
import { useAppSelector } from "../../services/store/hooks";
import { selectCollectionByID } from "../../services/store/collections/colectionsReduser";
import { selectUserByID } from "../../services/store/userList/userListReduser";

export default function Item(props: { item: ItemInterface }) {
  const { item } = props;
  const {
    userId,
    name,
    collectionId,
    textField1Value,
    textField2Value,
    textField3Value,
    numberField1Value,
    numberField2Value,
    numberField3Value,
  } = item;
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
  const user = selectUserByID(state, userId);

  return (
    <>
      {collection && (
        <CardWrapper>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle2" color={grey[400]}>
            <TranslatedText text="collectionOf" /> vine
          </Typography>
          <Typography variant="subtitle2" color={grey[400]}>
            <TranslatedText text="owner" /> {user?.login}
          </Typography>
          <Typography>
            {textField1Name && textField1Name + ": " + textField1Value}
          </Typography>
          <Typography>
            {textField2Name && textField2Name + ": " + textField2Value}
          </Typography>
          <Typography>
            {textField3Name && textField3Name + ": " + textField3Value}
          </Typography>
          <Typography>
            {numberField1Name && numberField1Name + ": " + numberField1Value}
          </Typography>
          <Typography>
            {numberField2Name && numberField2Name + ": " + numberField2Value}
          </Typography>
          <Typography>
            {numberField3Name && numberField3Name + ": " + numberField3Value}
          </Typography>
        </CardWrapper>
      )}
    </>
  );
}
