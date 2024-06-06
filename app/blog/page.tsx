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
    const res = await fetch(`${baseUrl}/api/blog`, {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      return {
        status: res.status,
        data: null,
      };
    }
    return {
      status: 200,
      data: await res.json(),
    };
  } catch (e) {
    return null;
  }
}
export default async function Blog() {
  const data = await getData();
  const posts = await getData();
  if (posts === null) {
    return (
      <div className="h-screen text-center flex flex-col gap-12 items-center justify-center">
        <h1 className="text-8xl font-bold text-primary">خطا</h1>
        <h2 className="text-primary font-bold text-5xl">
          امکان اتصال به سرور وجود ندارد
        </h2>
        <Link className="text-primary font-bold text-2xl" href="/">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }
  const postsView = posts.data.map((post: any) => {
    const created: Date = new Date(post.created);
    const persianCreated = shamsi.gregorianToJalali(created).join("/");
    return (
      <Card key={post.id} className="border-primary hover:bg-primary hover:text-white">
        <CardHeader>
          <CardTitle>
            <div className="flex flex-col gap-4">
              <img
                width={"auto"}
                height={"auto"}
                className="rounded-lg object-cover h-[225px] lg:h-[300px]"
                src={post.image}
                alt={`Post ${post.slug} Banner`}
              />
              <a href={`/blog/${post.slug}`}>{post.title}</a>
              {post.name}
            </div>
          </CardTitle>
          <CardDescription>{persianCreated}</CardDescription>
        </CardHeader>
        <CardContent>
          <span className="font-bold text-lg">نویسنده: </span>
          {post.author.name}
        </CardContent>
        <CardFooter>
          <Badge className="bg-primary pt-1">{post.catalog.title}</Badge>
        </CardFooter>
      </Card>
    );
  });
  return (
    <>
      <div className="p-12 mt-24 lg:p-24 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-5xl text-primary font-semibold">
          به وبلاگ Code Crafters خوش آمدید!
        </h1>
        <br />
        <p className="font-medium text-secondary text-xl max-w-[1000px]">
          در اینجا، Code Crafters به اشتراک‌گذاری مقالات تخصصی، و تجارب
          برنامه‌نویسی را برای شما فراهم می‌کند. از مقالات تکنیکی گرفته تا نکات
          کاربردی در دنیای برنامه‌نویسی، وبلاگ ما یک منبع جامع برای توسعه دانش
          شماست.
        </p>
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-24">
          {postsView}
        </div>
      </div>
    </>
  );
}
