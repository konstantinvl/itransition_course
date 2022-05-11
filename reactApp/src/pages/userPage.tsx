import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChangeableCollection from "../components/collection/changableCollection";

import CreateNew from "../components/createNew";
import TranslatedText from "../components/translatedText";
import { selectCollectionsByUserID } from "../services/store/collections/colectionsReduser";
import { useAppSelector } from "../services/store/hooks";

export default function UserPage() {
  const userId = Number(useParams().userId);
  const state = useAppSelector((state) => state);
  const collections = selectCollectionsByUserID(state, userId);

  return (
    <Stack justifyContent="flex-start">
      <Typography variant="h4">
        <TranslatedText text="myCollections" />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {collections.map((collection) => (
          <ChangeableCollection collection={collection} key={collection.id} />
        ))}
        <CreateNew text="createCollection" path="./new" />
      </Box>
    </Stack>
  );
}
