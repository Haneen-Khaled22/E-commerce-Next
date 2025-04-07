"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  name: string;
  href: string;
}

function Nav_Link({ name, href }: Props) {
  const pathname = usePathname();
  return (
    <div
     
      className={`${
        pathname === href ? "text-red-600" : "text-gray-700"
      } font-bold text-lg hover:text-red-600 transition duration-200 cursor-pointer`}
    >
      <Link href={href}>{name}</Link>
      {/* <Nav_Link/> */}
    </div>
  );
}

export default Nav_Link;
