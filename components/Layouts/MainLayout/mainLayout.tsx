import Grid from "@mui/material/Unstable_Grid2";
import { relative } from "path";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row">{children}</div>
    </>
  );
}

export default MainLayout;
