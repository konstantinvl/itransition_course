import { Box, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { CollectionInterface } from "../../common/interfaces";
import ChangeCollectionForm from "./changeCollectionForm";
import Collection from "./collection";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/store/hooks";
import { ROLE } from "../../common/renderData";
import { requestDeleteCollection } from "../../services/store/collections/collectionsActions";

export default function ChangeableCollection(props: {
  collection: CollectionInterface;
}) {
  const { collection } = props;
  const [isChanging, setIsChanging] = useState(false);
  const userId = Number(useParams().userId);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ display: "flex", mr: 0.5 }}>
      {isChanging ? (
        <ChangeCollectionForm
          collection={collection}
          callback={() => setIsChanging(!isChanging)}
        />
      ) : (
        <Collection collection={collection} />
      )}
      {(user.id === userId || user.role === ROLE.ADMIN) && (
        <Stack spacing={2}>
          <IconButton onClick={() => setIsChanging(!isChanging)}>
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => dispatch(requestDeleteCollection(collection.id))}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      )}
    </Box>
  );
}
