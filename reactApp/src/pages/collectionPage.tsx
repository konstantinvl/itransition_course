import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ROLE } from "../common/renderData";
import CreateNew from "../components/createNew";
import ChangeableItem from "../components/item/changeableItem";

import { selectCollectionByID } from "../services/store/collections/colectionsReduser";
import { useAppSelector } from "../services/store/hooks";
import { selectItemsByCollectionID } from "../services/store/items/itemsReduser";

export default function CollectionPage() {
  const collectionId = Number(useParams().collectionId);
  const state = useAppSelector((state) => state);
  const { user } = state;
  const items = selectItemsByCollectionID(state, collectionId);
  const collection = selectCollectionByID(state, collectionId);

  return (
    <>
      {collection && (
        <Stack justifyContent="flex-start">
          <Typography variant="h4">{collection.name}</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {items.map((item) => (
              <ChangeableItem item={item} key={item.id} />
            ))}
            {(user.id === collection.userId || user.role === ROLE.ADMIN) && (
              <CreateNew text="createItem" path={`./newItem/${collectionId}`} />
            )}
          </Box>
        </Stack>
      )}
    </>
  );
}
