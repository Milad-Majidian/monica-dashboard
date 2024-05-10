"use client";
import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../components/Ui/theme/theme";
import ThemeRegistry from "@/components/Ui/ThemeRegistry";
import "@/variable/variable.css";

function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeRegistry>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </ThemeRegistry>
    </>
  );
}

export default Provider;
