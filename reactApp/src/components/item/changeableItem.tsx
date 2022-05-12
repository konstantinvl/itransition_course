import { Box, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { CollectionInterface, ItemInterface } from "../../common/interfaces";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../services/store/hooks";
import { ROLE } from "../../common/renderData";
import ChangeItemForm from "./changeItemForm";
import Item from "./item";

export default function ChangeableItem(props: { item: ItemInterface }) {
  const { item } = props;
  const [isChanging, setIsChanging] = useState(false);
  const { userId } = item;
  const user = useAppSelector((state) => state.user);
  return (
    <Box sx={{ display: "flex", mr: 0.5 }}>
      {isChanging ? (
        <ChangeItemForm
          item={item}
          callback={() => setIsChanging(!isChanging)}
        />
      ) : (
        <Item item={item} />
      )}
      {(user.id === userId || user.role === ROLE.ADMIN) && (
        <Stack spacing={2}>
          <IconButton onClick={() => setIsChanging(!isChanging)}>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      )}
    </Box>
  );
}
