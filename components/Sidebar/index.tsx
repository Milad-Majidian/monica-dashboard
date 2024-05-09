import {
  Drawer,
  Fab,
  IconButton,
  styled,
  Theme,
  useMediaQuery,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import DrawerContent from "../Drawer-content";
import { IoMenuSharp } from "react-icons/io5";
import theme from "../Ui/theme/theme";

// import { Menu } from "@mui/icons-material";

const drawerWidth = 320;

function SideBar({
  value,
  handleChange,
  desktopDrawer,
  toggleDesktopDrawer,
}: {
  value: number;
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  desktopDrawer: boolean;
  toggleDesktopDrawer: () => void;
}) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const displyDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );
  const displayMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <>
      {displayMobile && (
        <Fab
          color="primary"
          aria-label="add"
          size="medium"
          sx={{ m: 2 }}
          onClick={() => toggleDrawer()}
        >
          <IoMenuSharp />
        </Fab>
      )}
      {displyDesktop && desktopDrawer && (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={desktopDrawer}
        >
          <DrawerContent value={value} handleChange={handleChange} />
        </Drawer>
      )}
      {displayMobile && (
        <Drawer
          open={open}
          onClose={toggleDrawer}
          PaperProps={{
            sx: { width: 300 },
            md: { width: 300 },
            lg: { width: 372 },
            xl: { width: 313 },
          }}
        >
          <DrawerContent value={value} handleChange={handleChange} />
        </Drawer>
      )}
    </>
  );
}

export default SideBar;
