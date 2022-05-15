import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { ROLE } from "../common/renderData";
import ChangeableCollection from "../components/collection/changableCollection";

import CreateNew from "../components/createNew";
import TranslatedText from "../components/translatedText";
import { selectCollectionsByUserID } from "../services/store/collections/colectionsReduser";
import { useAppSelector } from "../services/store/hooks";
import { selectUserByID } from "../services/store/userList/userListReduser";

export default function UserPage() {
  const userId = Number(useParams().userId);
  const state = useAppSelector((state) => state);
  const { user } = state;
  const owner = selectUserByID(state, userId);
  const collections = selectCollectionsByUserID(state, userId);

  return (
    <Stack justifyContent="flex-start" className="gogo">
      <Typography variant="h4">
        {owner?.login}
        <TranslatedText text="collectionTitle" />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {collections.map((collection) => (
          <ChangeableCollection collection={collection} key={collection.id} />
        ))}
        {(user.id === userId || user.role === ROLE.ADMIN) && (
          <CreateNew text="createCollection" path="./new" />
        )}
      </Box>
    </Stack>
  );
}
