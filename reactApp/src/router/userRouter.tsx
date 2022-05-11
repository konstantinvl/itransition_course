import React from "react";
import { Route, Routes } from "react-router-dom";
import UserWrapper from "../components/pageWrappers/userWrapper";
import CreateCollection from "../pages/createCollection";
import UserPage from "../pages/userPage";
import CollectionRouter from "./collectionRouter";

export default function UserRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<UserWrapper />}>
        <Route index element={<UserPage />} />
        <Route path="new" element={<CreateCollection />} />
        <Route path="/:collectionId/*" element={<CollectionRouter />} />
      </Route>
    </Routes>
  );
}
