import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { CommentInterface } from "../../common/interfaces";
import { useAppSelector } from "../../services/store/hooks";
import { selectUserByID } from "../../services/store/userList/userListReduser";

export default function Comment(props: { comment: CommentInterface }) {
  const { comment } = props;
  const state = useAppSelector((state) => state);
  const user = selectUserByID(state, comment.userId);

  return (
    <>
      {user && (
        <Card sx={{ display: "flex", p: 0.5 }}>
          <Typography sx={{ width: "15%" }}>{user.login}: </Typography>
          <Typography>{comment.comment}</Typography>
        </Card>
      )}
    </>
  );
}
