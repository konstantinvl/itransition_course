import React from "react";
import { Route, Routes } from "react-router-dom";
import MainWrapper from "../components/pageWrappers/mainWrapper";
import CreateCollection from "../pages/createCollection";
import ItemPage from "../pages/itemPage";
import MainPage from "../pages/main";
import TagPage from "../pages/tagPage";

import AuthRouter from "./authRouter";
import CollectionRouter from "./collectionRouter";
import UserRouter from "./userRouter";

export default function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainWrapper />}>
        <Route index element={<MainPage />} />
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/:userId/*" element={<UserRouter />} />
        <Route path="/:userId/new" element={<CreateCollection />} />
        <Route path="/tag/:tag" element={<TagPage />} />
        <Route path="/:userId/:collectionId/*" element={<CollectionRouter />} />
        <Route path="/:userId/:collectionId/:itemId" element={<ItemPage />} />
      </Route>
    </Routes>
  );
}
