import { Button } from "@mui/material";
import React, { useState } from "react";
import { splitLikes } from "../../common/functions";
import { useAppSelector } from "../../services/store/hooks";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Like(props: { likes: string; itemId: number }) {
  const { likes } = props;
  const splitedLikes = splitLikes(likes);

  const user = useAppSelector((state) => state.user);

  const [isLiked, setIsLiked] = useState<boolean>(
    splitedLikes.includes(user.id)
  );

  return (
    <Button
      color="warning"
      size="small"
      startIcon={isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      onClick={() => {
        setIsLiked(!isLiked);
        console.log(!!user.id);
      }}
      disabled={!user.id}
    >
      {splitedLikes.length}
    </Button>
  );
}
