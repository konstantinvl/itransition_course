import { Stack } from "@mui/material";
import React from "react";
import { CollectionInterface } from "../common/interfaces";
import Collection from "../components/collection/collection";
import Item from "../components/item/item";
import SectionMain from "../components/main/section";
import TagButton from "../components/tagButton";
import {
  selectBiggestCollections,
  selectCollectionByID,
} from "../services/store/collections/colectionsReduser";
import { useAppSelector } from "../services/store/hooks";
import { selectLatestItems } from "../services/store/items/itemsReduser";

export default function MainPage() {
  const state = useAppSelector((state) => state);
  const items = selectLatestItems(state);
  const collectionsIds = selectBiggestCollections(state);
  const collections =
    collectionsIds &&
    (collectionsIds.map((id) =>
      selectCollectionByID(state, id)
    ) as CollectionInterface[]);

  return (
    <>
      {collections.length && items.length && state.tags.tags.length && (
        <Stack color={"primary"}>
          <SectionMain title="biggestCollection">
            {collections.map((collection) => (
              <Collection collection={collection} key={collection.id} />
            ))}
          </SectionMain>
          <SectionMain title="lastItems">
            {items.map((item) => (
              <Item item={item} key={item.id} />
            ))}
          </SectionMain>
          <SectionMain title="tagList">
            {state.tags.tags.map((tag, index) => (
              <TagButton tag={tag.tag} key={tag.tag + index} />
            ))}
          </SectionMain>
        </Stack>
      )}
    </>
  );
}
