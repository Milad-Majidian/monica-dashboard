"use client";

import Layouts from "@/components/Layouts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layouts>{children}</Layouts>
    </>
  );
}
