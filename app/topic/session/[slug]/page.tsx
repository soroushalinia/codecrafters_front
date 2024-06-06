import Link from "next/link";
import * as shamsi from "shamsi-date-converter";

async function getData({ slug }: { slug: string }) {
  try {
    const baseUrl = process.env.API_URL;
    const res = await fetch(`${baseUrl}/api/topic/session/${slug}`, {
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

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getData({ slug: params.slug });
//   console.log(post)
  if (post === null) {
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
  if (post.status === 404) {
    return (
      <div className="h-screen text-center flex flex-col gap-12 items-center justify-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <h2 className="text-primary font-bold text-5xl">
          پست مورد نظر وجود ندارد
        </h2>
        <Link className="text-primary font-bold text-2xl" href="/">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }
  const persianCreated = shamsi.gregorianToJalali(post.data.created).join("/");

  return (
    <div className="p-10 max-w-[1024px] flex flex-row justify-center">
      <div className="flex flex-col items-start justify-start ">
        <br />
        {/* <br /> */}
        <h1 className="font-extrabold text-primary text-3xl lg:text-4xl w-full">
          {post.data.title}
        </h1>
        {/* <br /> */}
        <br />
        <div className="flex flex-row items-center gap-1 text-primary font-semibold text-sm w-full">
          <p>تاریخ: </p>
          <p>{persianCreated}</p>
        </div>
        <div className="flex flex-row items-center gap-1 text-primary font-semibold text-sm w-full">
          <p>نوشته شده توسط: </p>
          {/* <p>{post.data.author.name}</p> */}
        </div>
        <br />
        <br />
        <p
          className="text-primary w-full"
          dangerouslySetInnerHTML={{ __html: post.data.describtion }}
        ></p>
      </div>
    </div>
  );
}
