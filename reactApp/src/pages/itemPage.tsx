import React from "react";
import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../services/store/hooks";
import { selectItemsByID } from "../services/store/items/itemsReduser";
import { selectCollectionByID } from "../services/store/collections/colectionsReduser";
import { selectUserByID } from "../services/store/userList/userListReduser";
import { splitTags } from "../common/functions";
import TranslatedText from "../components/translatedText";
import ComponentsWrapper from "../components/componentsWrapper";
import TagButton from "../components/tagButton";
import Like from "../components/item/like";
import { selectCommentsByItemID } from "../services/store/comments/commentsReduser";
import Comment from "../components/item/comment";
import CommentForm from "../components/item/commentForm";

export default function ItemPage() {
  const itemId = Number(useParams().itemId);

  const state = useAppSelector((state) => state);
  const item = selectItemsByID(state, itemId);

  const collection = item && selectCollectionByID(state, item?.collectionId);

  const user = item && selectUserByID(state, item.userId);
  const splitedTags = item && splitTags(item.tags);
  const comments = selectCommentsByItemID(state, itemId);
  const activeUser = state.user;
  return (
    <>
      {collection && item && user && comments && (
        <Stack spacing={2} sx={{ flex: 1, mx: 0.5 }}>
          <Typography variant="h5">
            {item.name} <Like likes={item.likes} itemId={item.id} />
          </Typography>
          <Typography variant="subtitle2" color={grey[400]}>
            <TranslatedText text="collectionOf" />{" "}
            <TranslatedText text={collection.type} />
          </Typography>
          <Typography variant="subtitle2" color={grey[400]}>
            <TranslatedText text="owner" /> {user?.login}
          </Typography>
          <Typography>
            {collection.textField1Name &&
              collection.textField1Name + ": " + item.textField1Value}
          </Typography>
          <Typography>
            {collection.textField2Name &&
              collection.textField2Name + ": " + item.textField2Value}
          </Typography>
          <Typography>
            {collection.textField3Name &&
              collection.textField3Name + ": " + item.textField3Value}
          </Typography>
          <Typography>
            {collection.numberField1Name &&
              collection.numberField1Name + ": " + item.numberField1Value}
          </Typography>
          <Typography>
            {collection.numberField2Name &&
              collection.numberField2Name + ": " + item.numberField2Value}
          </Typography>
          <Typography>
            {collection.numberField3Name &&
              collection.numberField3Name + ": " + item.numberField3Value}
          </Typography>
          <ComponentsWrapper>
            {splitedTags &&
              splitedTags.map((tag, index) => (
                <TagButton tag={tag} key={tag + index} />
              ))}
          </ComponentsWrapper>

          <Stack>
            {comments.map((comment) => (
              <Comment comment={comment} />
            ))}
            {activeUser.login && <CommentForm itemId={itemId} />}
          </Stack>
        </Stack>
      )}
    </>
  );
}
