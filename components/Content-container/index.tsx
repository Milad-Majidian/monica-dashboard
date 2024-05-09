import {
  Box,
  Fab,
  IconButton,
  styled,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { IoMenuSharp } from "react-icons/io5";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function ContentContainer({
  children,
  desktopDrawer,
  toggleDesktopDrawer,
}: {
  children?: React.ReactNode;
  desktopDrawer: boolean;
  toggleDesktopDrawer: () => void;
}) {
  const displyDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );

  return (
    <>
      <div className="w-full flex flex-col">
        {displyDesktop && (
          <div className="w-full lg:h-[85px] border-b border-solid border-borderSecondary">
            <Box
              className="h-full flex justify-start items-center p-8 cursor-pointer"
              onClick={toggleDesktopDrawer}
            >
              <IoMenuSharp size={25} />
            </Box>
          </div>
        )}

        {/* sx={{ bgcolor: "secondary.main" }} */}

        {children}
      </div>
    </>
  );
}

export default ContentContainer;
