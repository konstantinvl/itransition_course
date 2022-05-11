import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { selectCollectionsByUserID } from "../../services/store/collections/colectionsReduser";
import { useAppSelector } from "../../services/store/hooks";
import { selectItemsByCollectionID } from "../../services/store/items/itemsReduser";

export default function CollectionWrapper() {
  const collectionId = Number(useParams().collectionId);
  const state = useAppSelector((state) => state);
  const items = selectItemsByCollectionID(state, collectionId);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("trynavigate");
    navigate("./");
  }, [items]);
  return (
    <>
      <Outlet />
    </>
  );
}
