"use client";

import { use, useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import MenuIcon from "./svgs/MenuIcon";

export default function MenuClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [menuOpen]);

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
