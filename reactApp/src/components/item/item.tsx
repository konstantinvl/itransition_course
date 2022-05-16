import React from "react";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CardWrapper from "../cardWrapper";
import TranslatedText from "../translatedText";
import { CollectionInterface, ItemInterface } from "../../common/interfaces";
import { useAppSelector } from "../../services/store/hooks";
import { selectCollectionByID } from "../../services/store/collections/colectionsReduser";
import { selectUserByID } from "../../services/store/userList/userListReduser";
import { splitTags } from "../../common/functions";
import TagButton from "../tagButton";
import ComponentsWrapper from "../componentsWrapper";
import Like from "./like";
import { useNavigate } from "react-router-dom";

export default function Item(props: { item: ItemInterface }) {
  const { item } = props;
  const {
    userId,
    id,
    name,
    collectionId,
    textField1Value,
    textField2Value,
    textField3Value,
    numberField1Value,
    numberField2Value,
    numberField3Value,
    tags,
    likes,
  } = item;
  const state = useAppSelector((state) => state);

  const collection = selectCollectionByID(
    state,
    collectionId
  ) as CollectionInterface;

  const user = selectUserByID(state, userId);
  const splitedTags = splitTags(tags);

  const navigate = useNavigate();

  return (
    <>
      {collection && (
        <CardWrapper
          onClick={() => navigate(`/${userId}/${collectionId}/${id}`)}
        >
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle2" color={grey[400]}>
            <TranslatedText text="collectionOf" />{" "}
            <TranslatedText text={collection.type} />
          </Typography>
          <Typography variant="subtitle2" color={grey[400]}>
            <TranslatedText text="owner" /> {user?.login}
          </Typography>
          <Typography>
            {collection.textField1Name &&
              collection.textField1Name + ": " + textField1Value}
          </Typography>
          <Typography>
            {collection.textField2Name &&
              collection.textField2Name + ": " + textField2Value}
          </Typography>
          <Typography>
            {collection.textField3Name &&
              collection.textField3Name + ": " + textField3Value}
          </Typography>
          <Typography>
            {collection.numberField1Name &&
              collection.numberField1Name + ": " + numberField1Value}
          </Typography>
          <Typography>
            {collection.numberField2Name &&
              collection.numberField2Name + ": " + numberField2Value}
          </Typography>
          <Typography>
            {collection.numberField3Name &&
              collection.numberField3Name + ": " + numberField3Value}
          </Typography>
          <ComponentsWrapper>
            {splitedTags &&
              splitedTags.map((tag, index) => (
                <TagButton tag={tag} key={tag + index} />
              ))}
          </ComponentsWrapper>
          <Like likes={likes} itemId={id} />
        </CardWrapper>
      )}
    </>
  );
}
