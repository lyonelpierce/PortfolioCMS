import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";

import { getInfo } from "@/sanity/sanity.query";
import type { InfoType } from "@/types";

const montserrat = Montserrat({ subsets: ["latin"] });

const info: InfoType[] = await getInfo();
const meta = info.map((data) => {
  return {
    title: data.metaData,
    description: data.description,
    logo: data.logo,
    menu: data.menu,
  };
});

export const metadata: Metadata = {
  title: meta[0].title,
  description: meta[0].description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-[#1f1f1f] text-white h-screen ${montserrat.className}`}
      >
        <NavBar logo={meta[0].logo} />
        {children}
      </body>
    </html>
  );
}
