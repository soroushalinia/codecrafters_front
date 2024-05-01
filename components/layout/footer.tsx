"use client";

import ENamad from "@/image/enamad.jpg";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import NavLinks from "./links";
 



export default function Footer() {
  return (
    <footer className="mt-12 p-12 bg-primary flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between text-white">
      <p className="max-w-[400px]">
        Code Crafters یک جامعه از برنامه‌نویسان پرشور است که در زمینه‌های متعددی
        فعالیت می‌کنند و به بهبود مهارت‌های برنامه‌نویسی و اشتراک تجربیات
        می‌پردازند.
      </p>
      <Image className="rounded-2xl p-2" src={ENamad} alt="ای نماد تک ستاره" width={100} height={100}></Image>
      <p className="text-sm max-w-[400px]">
        تمامی حقوق برای توسعه دهندگان محفوظ است
      </p>
    </footer>
  );
}
