"use client";

import { useState } from "react";
import MenuItems from "./MenuItems";
import MenuIcon from "./svgs/MenuIcon";

export default function MenuClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        className="scale-100 md:scale-125 cursor-pointer"
        onClick={() => setMenuOpen(true)}
      >
        <MenuIcon />
      </div>
      <MenuItems menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
