import { Box, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { ItemInterface } from "../../common/interfaces";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../services/store/hooks";
import { ROLE } from "../../common/renderData";
import ChangeItemForm from "./changeItemForm";
import Item from "./item";
import { requestDeleteItem } from "../../services/store/items/itemsActions";

export default function ChangeableItem(props: { item: ItemInterface }) {
  const { item } = props;
  const [isChanging, setIsChanging] = useState(false);
  const { userId } = item;
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
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
          <IconButton onClick={() => dispatch(requestDeleteItem(item.id))}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      )}
    </Box>
  );
}
