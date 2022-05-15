import { CardMedia, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import TranslatedText from "../translatedText";
import collectionImage from "../../assets/collection.png";
import { CollectionInterface } from "../../common/interfaces";
import CardWrapper from "../cardWrapper";
import { useAppSelector } from "../../services/store/hooks";
import { selectUserByID } from "../../services/store/userList/userListReduser";
import { useNavigate } from "react-router-dom";

export default function Collection(props: { collection: CollectionInterface }) {
  const { userId, type, name, description, id } = props.collection;

  const state = useAppSelector((state) => state);
  const user = selectUserByID(state, userId);

  const navigate = useNavigate();

  return (
    <>
      {user && (
        <CardWrapper onClick={() => navigate(`/${user.id}/${id}`)}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle2" color={grey[400]}>
            <TranslatedText text="collectionOf" />{" "}
            <TranslatedText text={type} />
          </Typography>
          <Typography
            variant="subtitle2"
            color={grey[400]}
            onClick={(ev) => {
              ev.stopPropagation();
              navigate(`/${user.id}`);
            }}
          >
            <TranslatedText text="owner" />
            {user.login}
          </Typography>
          <CardMedia
            component="img"
            height="250"
            image={collectionImage}
            alt="collectionImage"
          />
          <Typography variant="subtitle2">
            <i>{description}</i>
          </Typography>
        </CardWrapper>
      )}
    </>
  );
}
