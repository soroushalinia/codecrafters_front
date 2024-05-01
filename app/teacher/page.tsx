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

async function getData() {
  const res = await fetch("http://127.0.0.1:8001/api/teacher");
  if (!res.ok) {
    throw new Error("Failed to fetch teachers");
  }
  return res.json();
}

export default async function About() {
  const teachers = await getData();
  console.log(teachers);
  const teachersView = teachers.map((teacher: any) => {
    return (
      <Card key={teacher.name}>
        <CardHeader>
          <CardTitle>
            <div className="flex flex-col items-center justify-center gap-3">
              {teacher.image === null ? (
                <IoPersonCircleOutline className="w-[200px] h-[200px] text-gray-500" />
              ) : (
                <Image
                  className="rounded-full w-[200px] h-[200px] object-cover"
                  src={teacher.image}
                  alt={`${teacher.name}_profile`}
                  width={100}
                  height={100}
                ></Image>
              )}
              <p>{teacher.name}</p>
            </div>
          </CardTitle>
          <CardDescription>{teacher.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <p dangerouslySetInnerHTML={{ __html: teacher.describe }}></p>
        </CardContent>
        <CardFooter className="flex flex-row-reverse justify-center gap-2 lg:gap-6">
          <a href={`https://github.com/${teacher.github_username}`} className="p-3 rounded-full text-primary bg-gray-200 hover:bg-primary hover:text-white">
            <FaGithub className="w-6 h-6"></FaGithub>
          </a>
          <a href={`https://linkedin.com/${teacher.linkedin_username}`} className="p-3 rounded-full text-primary bg-gray-200 hover:bg-primary hover:text-white">
            <FaLinkedin className="w-6 h-6"></FaLinkedin>
          </a>
          <a href={`mailto:${teacher.email}`} className="p-3 rounded-full text-primary bg-gray-200 hover:bg-primary hover:text-white">
            <FaMessage className="w-6 h-6"></FaMessage>
          </a>
          <a href={`https://t.me/${teacher.telegram_username}`} className="p-3 rounded-full text-primary bg-gray-200 hover:bg-primary hover:text-white">
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
