import * as shamsi from "shamsi-date-converter";

async function getData(slug: string) {
  const posts = await fetch("http://127.0.0.1:8002/api/blog");
  const authors = await fetch("http://127.0.0.1:8002/api/teacher");
  const catalog = await fetch("http://127.0.0.1:8002/api/catalog");

  if (!posts.ok || !authors.ok || !catalog.ok) {
    throw new Error("Failed to fetch post");
  }

  const postsRaw = await posts.json();
  const post = postsRaw.filter((post: any) => post.slug === slug);
  if (post.length === 0) {
    return null;
  }
  return {
    post: post[0],
    authors: await authors.json(),
    catalog: await catalog.json(),
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);
  if (data === null) {
    return <div>404 post not found</div>;
  }
  const post = data["post"];

  const created: Date = new Date(post.created);
  const author = data["authors"].filter((a: any) => a.id === post.author)[0]
    .name;
  const topic = data["catalog"][post.catalog - 1].title;
  const persianCreated = shamsi.gregorianToJalali(created).join("/");

  return (
    <div className="p-24">
      <div className="flex flex-col items-center justify-start">
        <h1 className="font-extrabold text-primary text-4xl lg:text-8xl">
          {post.title}
        </h1>
        <br />
        <br />
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="font-bold text-2xl text-primary">نوشته شده توسط: </p>
          <p className="font-medium text-2xl text-secondary">{author}</p>
          <p className="font-medium text-2xl text-secondary">{persianCreated}</p>
        </div>
        <br />

        <img
          className="max-w-[1024px] rounded-sm"
          src={post.image}
          alt={`Post ${post.slug} Banner`}
        />
        
        <br />
        <hr />
        <br />

        <p className="text-primary text-right" dangerouslySetInnerHTML={{ __html: post.describe }}></p>
        
      </div>
    </div>
  );
}
