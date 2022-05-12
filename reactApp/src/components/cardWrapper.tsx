import { Card } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

export default function CardWrapper(props: {
  children: JSX.Element[] | JSX.Element;
  onClick?: () => void;
  bgColor?: string;
}) {
  const { children, onClick, bgColor } = props;
  return (
    <Card
      onClick={onClick ? () => onClick() : () => {}}
      sx={{
        borderRadius: 10,
        border: `1px solid ${grey[100]}`,
        width: 250,
        maxWidth: 250,
        p: 2,
        m: 1,
        boxShadow: 2,
        transition: "all 0.3s",
        bgcolor: bgColor ? bgColor : "unset",
        "&:hover": {
          boxShadow: 4,
          transform: "scale(1.02)",
        },
      }}
    >
      {children}
    </Card>
  );
}
