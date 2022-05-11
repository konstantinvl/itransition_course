import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { selectCollectionsByUserID } from "../../services/store/collections/colectionsReduser";
import { useAppSelector } from "../../services/store/hooks";

export default function UserWrapper() {
  const userId = Number(useParams().userId);
  const state = useAppSelector((state) => state);
  const collections = selectCollectionsByUserID(state, userId);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("trynavigate");
    navigate("./");
  }, [collections]);
  return (
    <>
      <Outlet />
    </>
  );
}
