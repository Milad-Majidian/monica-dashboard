import Layouts from "@/components/Layouts";
import { ReactNode } from "react";

export default function Home({ children }: { children: ReactNode }) {
  return (
    <>
      <Layouts>{children}</Layouts>
    </>
  );
}
