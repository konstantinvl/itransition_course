import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { selectCollectionsByUserID } from "../../services/store/collections/colectionsReduser";
import { useAppSelector } from "../../services/store/hooks";

export default function MainWrapper() {
  const user = useAppSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [user]);
  return (
    <>
      <Outlet />
    </>
  );
}
