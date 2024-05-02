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

async function getData() {
  const posts = await fetch("http://127.0.0.1:8002/api/blog");
  const authors = await fetch("http://127.0.0.1:8002/api/teacher");
  const catalog = await fetch("http://127.0.0.1:8002/api/catalog");
  if (!posts.ok || !authors.ok || !catalog.ok) {
    throw new Error("Failed to fetch data");
  }
  return {
    posts: await posts.json(),
    authors: await authors.json(),
    catalog: await catalog.json(),
  };
}

export default async function Blog() {
  const data = await getData();
  const postsView = data["posts"].map((post: any) => {
    const created: Date = new Date(post.created);
    const author = data["authors"].filter((a: any) => a.id === post.author)[0]
      .name;
    const topic = data["catalog"][post.catalog - 1].title;
    const persianCreated = shamsi.gregorianToJalali(created).join("/");
    return (
      <Card key={post.id} className="border-primary">
        <CardHeader>
          <CardTitle>
            <div className="flex flex-col gap-4">
              <img
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
          {author}
        </CardContent>
        <CardFooter>
          <Badge className="bg-primary pt-1">{topic}</Badge>
        </CardFooter>
      </Card>
    );
  });
  return (
    <>
      <div className="p-12 mt-24 lg:p-24 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-5xl text-primary font-semibold">به وبلاگ Code Crafters خوش آمدید!</h1>
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
