import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as shamsi from "shamsi-date-converter";
import Link from "next/link";

async function getData() {
  try {
    const baseUrl = process.env.API_URL;
    const res = await fetch(`${baseUrl}/api/realpython`, {
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

export default async function Blog() {
  const topics = await getData();
  if (topics === null) {
    return (
      <div className="h-screen text-center flex flex-col gap-12 items-center justify-center">
        <h1 className="text-8xl font-bold text-primary">خطا</h1>
        <h2 className="text-primary font-bold text-5xl">امکان اتصال به سرور وجود ندارد</h2>
        <Link className="text-primary font-bold text-2xl" href="/">بازگشت به صفحه اصلی</Link>
      </div>
    );
  }
  const topicView = topics.map((topic: any) => {
    return (
      <Card key={topic.id} className="border-primary hover:bg-primary hover:text-white">
        <CardHeader>
          <CardTitle>
            <div className="flex flex-col gap-4">
              <img
                className="rounded-lg object-cover h-[225px] lg:h-[300px]"
                src={topic.image}
                alt={`Topic ${topic.slug} Banner`}
              />
              <a href={`/topic/${topic.slug}`}>{topic.title}</a>
              {topic.name}
            </div>
          </CardTitle>
          <CardDescription>{topic.start}</CardDescription>
        </CardHeader>
        <CardContent>
          <span className="font-bold text-lg">نویسنده: </span>
          {topic.author.name}
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    );
  });
  return (
    <>
      <div className="p-12 mt-24 lg:p-24 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-5xl text-primary font-semibold">
          موضوعات
        </h1>
        <br />
        <p className="font-medium text-secondary text-xl max-w-[1000px]">
          در این بخش آموزش موضوعات مختلف به صورت تفکیک شده قرار می گیرد.
        </p>
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-24">
          {topicView}
        </div>
      </div>
    </>
  );
}
