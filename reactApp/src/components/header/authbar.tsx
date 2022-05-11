import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { AuthPages } from "../../common/renderData";
import { useAppSelector } from "../../services/store/hooks";

import NavigationLink from "./NavigationLink";
import UserBar from "./userbar";

export default function AuthBar() {
  const user = useAppSelector((state) => state.user);
  return (
    <ButtonGroup sx={{ margin: "0em 0.5em" }}>
      {!user.login ? (
        AuthPages.map((page) => (
          <Button variant="contained" key={page.title} sx={{ p: 0 }}>
            <NavigationLink page={page} />
          </Button>
        ))
      ) : (
        <UserBar />
      )}
    </ButtonGroup>
  );
}
