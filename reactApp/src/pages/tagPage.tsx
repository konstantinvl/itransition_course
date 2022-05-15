import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ComponentsWrapper from "../components/componentsWrapper";
import Item from "../components/item/item";
import { useAppSelector } from "../services/store/hooks";
import { selectItemsByTag } from "../services/store/items/itemsReduser";

export default function TagPage() {
  const tag = useParams().tag as string;
  const state = useAppSelector((state) => state);
  const items = selectItemsByTag(state, tag);

  return (
    <ComponentsWrapper>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ComponentsWrapper>
  );
}
