import { bagel } from "@/fonts/fonts";
import MenuClient from "./MenuClient";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-between items-center max-w-[1728px] px-4 py-2 mx-auto">
        <h1 className={`${bagel.className} text-3xl md:text-5xl`}>Y.Alouani</h1>
        <MenuClient />
      </header>
    </>
  );
}
