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
import { title } from "process";
import { useState } from "react";
import { BsShare } from "react-icons/bs";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Config = [
  {
    id: 1,
    title: "Share",
  },
  {
    id: 2,
    title: "History",
  },
];

function ContentContainer({
  children,
  desktopDrawer,
  toggleDesktopDrawer,
  openHistory,
  setOpenHistory,
}: {
  children?: React.ReactNode;
  desktopDrawer: boolean;
  toggleDesktopDrawer: () => void;
  openHistory: boolean;
  setOpenHistory: (value: boolean) => void;
}) {
  const displyDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <div className="w-full flex flex-col relative">
        {displyDesktop && (
          <div className="w-full lg:h-[85px] border-b border-solid border-borderSecondary">
            <div className="lg:h-[85px] flex justify-between items-center">
              <Box
                className="h-full flex justify-start items-center p-8 cursor-pointer"
                onClick={toggleDesktopDrawer}
              >
                <IoMenuSharp size={25} />
              </Box>
              <Box className="h-full flex justify-between items-center gap-3 p-8">
                {Config.map((item: any, index: any) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center w-[122px] h-[45px] border border-solid brder-borderPrimary rounded-[8px] 
                    ${
                      selectedItem === index
                        ? "bg-primaryLight border-transparent !text-primary"
                        : "text-textSecondary "
                    } cursor-pointer`}
                    onClick={() => setSelectedItem(index)}
                  >
                    <div
                      className="w-full flex justify-between items-center gap-1 px-4 py-2"
                      onClick={() => setOpenHistory(!openHistory)}
                    >
                      {item.title === "Share" && <BsShare size={20} />}
                      {item.title === "History" && (
                        <MdOutlineHistory size={25} />
                      )}
                      <span className="text-[18px] font-[400]">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </Box>
            </div>
          </div>
        )}

        {/* sx={{ bgcolor: "secondary.main" }} */}

        {children}
      </div>
    </>
  );
}

export default ContentContainer;
