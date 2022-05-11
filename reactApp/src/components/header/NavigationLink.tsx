import { Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { Page } from "../../common/interfaces";
import TranslatedText from "../translatedText";

export default function NavigationLink(props: { page: Page }) {
  const { page } = props;
  return (
    <Link
      component={NavLink}
      to={page.path}
      underline="none"
      color="inherit"
      sx={{
        height: "100%",
        px: 1.5,
        py: 1,
        transition: "all 0.2s",
        "&:hover": {
          color: "unset",
          textDecoration: "underline",
        },
      }}
    >
      <TranslatedText text={page.title} />
    </Link>
  );
}
