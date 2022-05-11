import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { CollectionInterface } from "../common/interfaces";
import CreateNew from "../components/createNew";
import Item from "../components/item/item";

import { selectCollectionByID } from "../services/store/collections/colectionsReduser";
import { useAppSelector } from "../services/store/hooks";
import { selectItemsByCollectionID } from "../services/store/items/itemsReduser";

export default function CollectionPage() {
  const collectionId = Number(useParams().collectionId);
  const state = useAppSelector((state) => state);
  const { user } = state;
  const items = selectItemsByCollectionID(state, collectionId);
  const collection = selectCollectionByID(
    state,
    collectionId
  ) as CollectionInterface;

  return (
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
          <Item item={item} key={item.id} />
        ))}
        <CreateNew text="createItem" path={`./newItem/${collectionId}`} />
      </Box>
    </Stack>
  );
}
