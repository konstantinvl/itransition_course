import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ComponentsWrapper from "../components/componentsWrapper";
import Item from "../components/item/item";
import TranslatedText from "../components/translatedText";
import { useAppSelector } from "../services/store/hooks";
import { selectItemsBySearch } from "../services/store/items/itemsReduser";

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState<string>("");
  const state = useAppSelector((state) => state);
  let items = selectItemsBySearch(state, searchValue);
  useEffect(() => {
    items = selectItemsBySearch(state, searchValue);
  }, [searchValue]);

  return (
    <Stack sx={{ flex: 0.7 }}>
      <TextField
        value={searchValue}
        onChange={(ev) => {
          setSearchValue(ev.target.value);
          console.log(items);
        }}
        label={<TranslatedText text="Search" />}
      />
      <ComponentsWrapper>
        <>{!searchValue && <TranslatedText text="noSearch" />}</>

        <>
          {searchValue &&
            items.map((item) => <Item item={item} key={item.id} />)}
        </>

        <>
          {searchValue && !items.length && <TranslatedText text="notFound" />}
        </>
      </ComponentsWrapper>
    </Stack>
  );
}
