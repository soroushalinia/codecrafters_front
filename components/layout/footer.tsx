"use client";

import ENamad from "@/image/enamad.png";
import { FaTelegram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 p-8 bg-primary flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-between text-white">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-2xl text-white">CodeCrafters | کد نویسان</h1>
        <p className="max-w-[400px]">
          Code Crafters یک جامعه از برنامه‌نویسان پرشور است که در زمینه‌های
          متعددی فعالیت می‌کنند و به بهبود مهارت‌های برنامه‌نویسی و اشتراک
          تجربیات می‌پردازند.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-center justify-center">
        <Link
          className="p-1 hover:bg-white hover:text-primary hover:rounded-full text-center"
          href="/about"
        >
          درباره‌ما
        </Link>
        <Link
          className="p-1 hover:bg-white hover:text-primary hover:rounded-full text-center"
          href="/teacher"
        >
          نویسندگان
        </Link>
        <Link
          className="p-1 hover:bg-white hover:text-primary hover:rounded-full text-center"
          href="/topic"
        >
          موضوعات
        </Link>
        <Link
          className="p-1 hover:bg-white hover:text-primary hover:rounded-full text-center"
          href="/blog"
        >
          وبلاگ
        </Link>
        <Link
          className="p-1 hover:bg-white hover:text-primary hover:rounded-full text-center"
          href="/realpython-farsi"
        >
          Realpython فارسی
        </Link>
        <Link
          className="p-1 hover:bg-white hover:text-primary hover:rounded-full text-center"
          href="/contact"
        >
          ارتباط با ما
        </Link>
      </div>
      <div className="flex flex-col gap-4 items-center text-lg justify-center">
        <p className="">
          ارتباط با سازنده قالب 
        </p>
        <div className="flex flex-row items-center gap-6">
        <a href="https://t.me/soroush_pm">
          <FaTelegram className="w-8 h-8 text-white"></FaTelegram>
        </a>
        <a href="https://github.com/soroushalinia">
          <FaGithub className="w-8 h-8 text-white"></FaGithub>
        </a>
        <a href="mailto:soroushalinia.wm@gmail.com">
          <IoMailOutline className="w-8 h-8 text-white"></IoMailOutline>
        </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          className="rounded-2xl"
          src={ENamad}
          alt="ای نماد تک ستاره"
          width={100}
          height={100}
        ></Image>

        <p className="text-sm max-w-[400px]">
          تمامی حقوق برای توسعه دهندگان محفوظ است
        </p>
      </div>
    </footer>
  );
}
