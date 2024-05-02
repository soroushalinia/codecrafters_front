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
  const baseUrl = process.env.API_URL;
  const imageUrl = baseUrl + "/media/blog/microsoft-ignite-4098x2653-10160.jpg";
  const topics = [
    {
      id: 1,
      slug: "test-1",
      title: "Test 1",
      image: imageUrl,
      author: "سروش علی نیا",
      start: "1402/2/12",
      describe: "Test Topic 1",
    },
    {
      id: 2,
      title: "Test 2",
      slug: "test-2",
      image: imageUrl,
      author: "سروش علی نیا",
      start: "1402/2/12",
      describe: "Test Topic 2",
    },
    {
      id: 3,
      title: "Test 3",
      slug: "test-3",
      image: imageUrl,
      author: "سروش علی نیا",
      start: "1402/2/12",
      describe: "Test Topic 3",
    },
    {
      id: 4,
      title: "Test 4",
      slug: "test-4",
      image: imageUrl,
      author: "سروش علی نیا",
      start: "1402/2/12",
      describe: "Test Topic 4",
    },
  ];
  return topics;
}

export default async function Blog() {
  const topics = await getData();
  const topicView = topics.map((topic: any) => {
    return (
      <Card key={topic.id} className="border-primary">
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
          {topic.author}
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
