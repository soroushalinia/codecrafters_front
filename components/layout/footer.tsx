"use client";

import ENamad from "@/image/enamad.png";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 p-8 bg-primary flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between text-white">
      <div className="flex flex-col items-center justify-center">
        <p className="max-w-[400px]">
          Code Crafters یک جامعه از برنامه‌نویسان پرشور است که در زمینه‌های
          متعددی فعالیت می‌کنند و به بهبود مهارت‌های برنامه‌نویسی و اشتراک
          تجربیات می‌پردازند.
        </p>
        <Image
          className="rounded-2xl p-2"
          src={ENamad}
          alt="ای نماد تک ستاره"
          width={100}
          height={100}
        ></Image>
      </div>
      <h1 className="text-2xl text-white">CodeCrafters | کد نویسان</h1>
      <p className="text-sm max-w-[400px]">
        تمامی حقوق برای توسعه دهندگان محفوظ است
      </p>
    </footer>
  );
}
