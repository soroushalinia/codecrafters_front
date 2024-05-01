"use client";

import pythonLogo from "@/image/pythonlogo.svg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import NavLinks from "./links";

export default function Navbar() {
  const [menuToggled, setMenuToggled] = useState(false);
  const handleToggle = () => {
    setMenuToggled(!menuToggled);
  };
  return (
    <nav className="flex flex-col items-center justify-center border-b border-primary">
      <div className="flex flex-row w-screen p-4 items-center justify-between">
        <div
          id="logo"
          className="flex flex-row items-center justify-center gap-2"
        >
          <Image
            src={pythonLogo}
            width={32}
            height={32}
            alt="python-logo"
          ></Image>
          <Link className="text-lg font-bold text-primary" href="/">
            پایتون فارسی
          </Link>
        </div>
        <div
          onClick={handleToggle}
          className="lg:hidden border border-1 p-2 rounded-md text-primary border-primary"
        >
          <IoMenu className="w-5 h-5"></IoMenu>
        </div>
        <div className="hidden lg:block">
          <NavLinks align="row"></NavLinks>
        </div>
      </div>
      {menuToggled && <NavLinks align="col"></NavLinks>}
    </nav>
  );
}
