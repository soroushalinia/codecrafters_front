import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import * as shamsi from "shamsi-date-converter";

async function getData({ slug }: { slug: string }) {
  try {
    const baseUrl = process.env.API_URL;
    const res = await fetch(`${baseUrl}/api/topic/${slug}`, {
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

export default async function TopicSlug({
  params,
}: {
  params: { slug: string };
}) {
  const slugs = await getData({ slug: params.slug });
  if (slugs === null) {
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
  if (slugs.status === 404) {
    return (
      <div className="h-screen text-center flex flex-col gap-12 items-center justify-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <h2 className="text-primary font-bold text-5xl">
          موضوع مورد نظر وجود ندارد
        </h2>
        <Link className="text-primary font-bold text-2xl" href="/">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }
  const slugsView = slugs.data.describe.map((session: any) => {
    const persianCreated = shamsi.gregorianToJalali(session.created).join("/");
    return (
      <Card key={session.id} className="border-primary p-8 hover:bg-primary hover:text-white">
        <CardHeader>
          <CardTitle>
            <div className="flex flex-col gap-4">
              {/* <img
                className="rounded-lg object-cover h-[225px] lg:h-[300px]"
                src={session.image}
                alt={`Topic ${session.slug} Banner`}
              /> */}
              <a href={`/topic/session/${session.slug}`}>
                جلسه {session.number}
              </a>
              {session.title}
            </div>
          </CardTitle>
          <CardDescription>{session.start}</CardDescription>
        </CardHeader>
        <CardContent>
          <span className="font-bold text-lg">تاریخ: </span>
          {persianCreated}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    );
  });
  return (
    <>
      <div className="p-12 mt-24 lg:p-24 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-5xl text-primary font-semibold">
          {slugs.data.name}
        </h1>
        <br />
        <p className="font-medium text-secondary text-xl max-w-[1000px]">
          در این بخش آموزش موضوعات مختلف به صورت تفکیک شده قرار می گیرد.
        </p>
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-24">
          {slugsView}
        </div>
      </div>
    </>
  );
}
