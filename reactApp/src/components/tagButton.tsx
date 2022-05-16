import React from "react";
import TagIcon from "@mui/icons-material/Tag";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TagButton(props: { tag: string }) {
  const { tag } = props;
  const navigate = useNavigate();
  return (
    <Button
      startIcon={<TagIcon />}
      size="small"
      onClick={(ev) => {
        ev.stopPropagation();
        navigate(`/tag/${tag}`);
      }}
    >
      {tag}
    </Button>
  );
}
