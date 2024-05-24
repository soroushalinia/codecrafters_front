import { IoPersonCircleOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTelegram, FaMessage } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  try {
    const baseUrl = process.env.API_URL;
    const res = await fetch(`${baseUrl}/api/teacher`, {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (e) {
    return null;
  }
}

export default async function About() {
  const teachers = await getData();
  if (teachers === null) {
    return (
      <div className="h-screen text-center flex flex-col gap-12 items-center justify-center">
        <h1 className="text-8xl font-bold text-primary">خطا</h1>
        <h2 className="text-primary font-bold text-5xl">امکان اتصال به سرور وجود ندارد</h2>
        <Link className="text-primary font-bold text-2xl" href="/">بازگشت به صفحه اصلی</Link>
      </div>
    );
  }
  const teachersView = teachers.map((teacher: any) => {
    return (
      <Card key={teacher.name}>
        <CardHeader>
          <CardTitle>
            <div className="pt-8 flex flex-col items-center justify-center gap-3">
              {teacher.image === null ? (
                <IoPersonCircleOutline className="w-[200px] h-[200px] text-gray-500" />
              ) : (
                <Image
                  className="rounded-full w-[200px] h-[200px] object-cover"
                  src={teacher.image}
                  alt={`${teacher.name}_profile`}
                  width={200}
                  height={200}
                ></Image>
              )}
              <p>{teacher.name}</p>
            </div>
          </CardTitle>
          <CardDescription>{teacher.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <p
            className=""
            dangerouslySetInnerHTML={{ __html: teacher.describe }}
          ></p>
        </CardContent>
        <CardFooter className="flex flex-row-reverse justify-center gap-2 lg:gap-6">
          <a
            href={`https://github.com/${teacher.github_username}`}
            className="p-3 rounded-full text-primary bg-gray-200 hover:bg-primary hover:text-white"
          >
            <FaGithub className="w-6 h-6"></FaGithub>
          </a>
          <a
            href={`https://linkedin.com/${teacher.linkedin_username}`}
            className="p-3 rounded-full text-primary bg-gray-200 hover:bg-primary hover:text-white"
          >
            <FaLinkedin className="w-6 h-6"></FaLinkedin>
          </a>
          <a
            href={`mailto:${teacher.email}`}
            className="p-3 rounded-full text-primary bg-gray-200 hover:bg-primary hover:text-white"
          >
            <FaMessage className="w-6 h-6"></FaMessage>
          </a>
          <a
            href={`https://t.me/${teacher.telegram_username}`}
            className="p-3 rounded-full text-primary bg-gray-200 hover:bg-primary hover:text-white"
          >
            <FaTelegram className="w-6 h-6"></FaTelegram>
          </a>
        </CardFooter>
      </Card>
    );
  });
  return (
    <div className="p-12">
      <h1 className="text-3xl pt-12 pb-12 text-primary font-bold">نویسندگان</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {teachersView}
      </div>
    </div>
  );
}
