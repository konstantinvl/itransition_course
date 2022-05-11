import React from "react";
import { Route, Routes } from "react-router-dom";

import CollectionWrapper from "../components/pageWrappers/collectionWrapper";

import CollectionPage from "../pages/collectionPage";

import CreateItem from "../pages/createItem";

export default function CollectionRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<CollectionWrapper />}>
        <Route index element={<CollectionPage />} />
        <Route path="newItem/:collectionid" element={<CreateItem />} />
      </Route>
    </Routes>
  );
}
