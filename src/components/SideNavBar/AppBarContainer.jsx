import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import "./SideNavBar.css";
import PrimarySearchAppBar from "../NavBar/NavBar";

const AppBarContainer = ({
  open,
  toggle,
  IconButton,
  handleDrawerClose,
  MenuIcon,
  handleDrawerOpen,
}) => {
  const Logo = "Logo";
  return (
    <>
      {/*.......... nav bar at top inclued logo , close/open toggle button and profilepart ............... */}
      <AppBar position="fixed" open={open}>
        <Toolbar
          className="navbar_whole_container_toolbarTag"
          style={{ padding: "0px", margin: "0px" }}
        >
          {/*......... minimize logo icon show in top left corner on close of side navbar ............  */}

          {!open && (
            <Typography>
              <div className="content_head_sidenav_container">
                <div className="content_head_sidenav">{Logo}</div>
              </div>
            </Typography>
          )}
          {/*........................ toggle sidenav with navbar icon ................................*/}
          {toggle ? (
            <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
              style={{ marginLeft: "7px" }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {/* .....................navbar imported and aaded in sidevar top........................ */}
          <Typography variant="h6" noWrap component="div">
            <PrimarySearchAppBar />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarContainer;

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
