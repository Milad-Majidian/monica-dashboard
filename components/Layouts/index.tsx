"use client";
import { use, useEffect, useState } from "react";
import MainLayout from "./MainLayout/mainLayout";
import SideBar from "../Sidebar";
import ContentContainer from "../Content-container";
import { usePathname, useRouter } from "next/navigation";
import { Typography } from "@mui/material";
import TabPanel from "../Tabs/tabPanel";
import History from "../History";

function Layouts({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState(0);
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName);

  const [desktopDrawer, setDesktopDrawer] = useState(true);
  const [openHistory, setOpenHistory] = useState(false);

  const toggleDesktopDrawer = () => {
    setDesktopDrawer(!desktopDrawer);
  };

  // const handleChange = (event: React.ChangeEvent, newValue: number) => {
  //   setValue(newValue);
  // };
  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  /**
   * Handles the change event of the input.
   *
   * @param {React.ChangeEvent<{}>} event - The change event object.
   * @param {number} newValue - The new value.
   */
  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
    if (newValue === 0) {
      router.push("/dashboard");
    } else if (newValue === 1) {
      router.push("/chat");
    } else if (newValue === 2) {
      router.push("/rewrite");
    } else if (newValue === 3) {
      router.push("/images");
    } else if (newValue === 4) {
      router.push("/translate");
    } else if (newValue === 5) {
      router.push("/grammar");
    } else if (newValue === 6) {
      router.push("/code");
    }
  }
  useEffect(() => {
    if (pathName === "/dashboard") {
      setValue(0);
    } else if (pathName === "/chat") {
      setValue(1);
    } else if (pathName === "/rewrite") {
      setValue(2);
    } else if (pathName === "/images") {
      setValue(3);
    } else if (pathName === "/translate") {
      setValue(4);
    } else if (pathName === "/grammar") {
      setValue(5);
    } else if (pathName === "/code") {
      setValue(6);
    }
  }, []);

  return (
    <MainLayout>
      <SideBar
        value={value}
        handleChange={handleChange}
        desktopDrawer={desktopDrawer}
        toggleDesktopDrawer={toggleDesktopDrawer}
      />
      <ContentContainer
        desktopDrawer={desktopDrawer}
        toggleDesktopDrawer={toggleDesktopDrawer}
        openHistory={openHistory}
        setOpenHistory={setOpenHistory}
      >
        {children}
        {/* {TabPanelContent.map((item, index) => {
          return (
            <TabPanel key={index} value={value} index={index}>
              <Typography variant="body1"></Typography>
            </TabPanel>
          );
        })} */}
        <History openHistory={openHistory} />
      </ContentContainer>
    </MainLayout>
  );
}

export default Layouts;
