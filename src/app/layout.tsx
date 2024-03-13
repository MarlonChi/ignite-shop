import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Config from "./config";

import Header from "@/components/Header";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Config>{children}</Config>
      </body>
    </html>
  );
}
