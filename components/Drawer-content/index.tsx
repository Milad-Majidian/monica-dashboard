import {
  Typography,
  Box,
  Container,
  useScrollTrigger,
  Fade,
  Fab,
  Divider,
  Avatar,
  Button,
  useMediaQuery,
  Tabs,
  Tab,
  Drawer,
} from "@mui/material";

import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import logo from "@/public/images/logo/brand-openai.svg";
import openAi from "@/public/images/logo/openAi-logo.svg";

import { Theme } from "@mui/material/styles";

import Image from "next/image";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiChatsThin } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineCamera } from "react-icons/ai";
import { HiTranslate } from "react-icons/hi";
import { TbTextGrammar } from "react-icons/tb";
import {
  IoAlertCircleOutline,
  IoCodeSlash,
  IoNotificationsOutline,
} from "react-icons/io5";

import Link from "next/link";

// import {
//   HomeRounded,
//   PersonRounded,
//   LocalPostOfficeRounded,
//   TerminalRounded,
//   MessageRounded,
//   CopyrightRounded,
//   FavoriteRounded,
// } from "@mui/icons-material";
const TabsItem = [
  {
    id: 1,
    label: "Dashboard",
    icon: <LuLayoutDashboard size={25} />,
    link: "dashboard",
  },
  {
    id: 2,
    label: "Chat",
    icon: <PiChatsThin size={25} />,
    link: "chat",
  },
  {
    id: 3,
    label: "Rewrite",
    icon: <FaPencilAlt size={20} />,
    link: "rewrite",
  },
  {
    id: 4,
    label: "images",
    icon: <AiOutlineCamera size={20} />,
    link: "images",
  },
  {
    id: 5,
    label: "Translate",
    icon: <HiTranslate size={20} />,
    link: "translate",
  },
  {
    id: 6,
    label: "Grammar",
    icon: <TbTextGrammar size={20} />,
    link: "grammar",
  },
  {
    id: 7,
    label: "Code",
    icon: <IoCodeSlash size={20} />,
  },
];
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
/////////////////////////////////////////////

function DrawerContent({
  value,
  handleChange,
}: {
  value: number;
  handleChange: any;
}) {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <>
      <Box
        color="whitesmoke"
        sx={{
          p: 2,
          borderBottom: `1px solid #EFEFEF`,
        }}
      >
        <div className="flex gap-2">
          <Image src={logo} alt="logo" width={44} height={44} />
          <Image src={openAi} alt="logo" />
        </div>
      </Box>

      <Box color="whitesmoke">
        <Tabs
          TabIndicatorProps={{
            style: {
              width: 4,
            },
          }}
          orientation="vertical"
          variant="scrollable"
          aria-label="icon position tabs example"
          sx={{
            fontWeight: "medium",
            fontSize: 14,
            ".MuiTabs-indicator": {
              left: 0,
            },
          }}
          value={value}
          onChange={handleChange}
        >
          {TabsItem.map((tab, index) => {
            return (
              <Tab
                key={index}
                label={
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "medium",
                      fontSize: 16,
                    }}
                  >
                    {tab.label}
                  </Typography>
                }
                sx={{
                  justifyContent: "flex-start",
                  width: "284px",
                  height: "52px",
                  minHeight: "52px",
                  padding: 3,
                  my: "5px",
                }}
                iconPosition="start"
                icon={tab.icon}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </Box>
      {/* <Divider
        variant="middle"
        color={grey[900]}
        sx={{ mt: 2, color: `secondary.light` }}
      /> */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
        }}
        color="whitesmoke"
      >
        <div className="w-full h-[115px] border-t border-solid border-borderPrimary px-[24px] py-[36px] text-textPrimary">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 justify-center items-center">
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt="Remy Sharp"
                src="/images/sideBar/avatar.png"
              />
              <div className="flex flex-col justify-start items-start text-textPrimary gap-1">
                <h4 className="text-[14px] font-[500]">Sara Moradi</h4>
                <span className="text-[#747474] text-[12px]">Lorem </span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-6 text-textSecondary">
              <IoNotificationsOutline size={24} />
              <IoAlertCircleOutline size={24} />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default DrawerContent;
