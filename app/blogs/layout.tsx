import { bagel } from "@/fonts/fonts";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import LastArticle from "../components/LastArticle";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="max-w-[1728px] mx-auto px-4">
        <div className="w-fit py-2">
          <Link href="/">
            <h1 className={`${bagel.className} text-3xl md:text-5xl`}>
              Y.Alouani
            </h1>
          </Link>
        </div>
        <div className="mt-20 max-w-[1500px] mx-auto space-y-10">
          {children}
          <div className="bg-gray-300 w-full h-[1px]" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
