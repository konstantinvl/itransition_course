import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { splitLikes } from "../../common/functions";
import { useAppDispatch, useAppSelector } from "../../services/store/hooks";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { requestLikeItem } from "../../services/store/items/itemsActions";

export default function Like(props: { likes: string; itemId: number }) {
  const { likes, itemId } = props;
  const splitedLikes = splitLikes(likes);

  const user = useAppSelector((state) => state.user);

  const [isLiked, setIsLiked] = useState<boolean>(
    splitedLikes.includes(user.id)
  );

  useEffect(() => {
    setIsLiked(splitedLikes.includes(user.id));
  }, [likes]);

  const dispath = useAppDispatch();

  return (
    <Button
      color="warning"
      size="small"
      startIcon={isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      onClick={() => {
        dispath(requestLikeItem(itemId, user.id));
      }}
      disabled={!user.id}
    >
      {splitedLikes.length}
    </Button>
  );
}
