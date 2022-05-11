import { Stack } from "@mui/material";
import React from "react";
import Collection from "../components/collection/collection";
import Item from "../components/item/item";
import SectionMain from "../components/main/section";
import { useAppSelector } from "../services/store/hooks";

export default function MainPage() {
  const { collections, items } = useAppSelector((state) => state);

  return (
    <Stack>
      <SectionMain title="biggestCollection">
        {collections.collections.map((collection) => (
          <Collection collection={collection} key={collection.id} />
        ))}
      </SectionMain>
      <SectionMain title="lastItems">
        {items.items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </SectionMain>
    </Stack>
  );
}
