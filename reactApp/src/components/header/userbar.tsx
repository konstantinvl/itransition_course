import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAppSelector } from "../../services/store/hooks";
import NavigationLink from "./NavigationLink";
import { UserMenuPages } from "../../common/renderData";

export default function UserBar() {
  const user = useAppSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color={"inherit"}
        variant="text"
      >
        {user.login}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {UserMenuPages.map((page) => {
          return (
            <MenuItem onClick={handleClose} key={page.title}>
              <NavigationLink
                page={{ title: "myCollections", path: `/${user.id}` }}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
