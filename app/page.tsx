import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { getSortedPostsData } from "@/lib/posts";
import { Search } from "lucide-react";
import Image from "next/image";
//import Logo from "@/public/Logo.png";

export default function Home() {
  //const dd = Array.from({ length: 12 }).map(() => getRandomSize());
  const posts = getSortedPostsData();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-between">
        <div className="w-1/3" />
        <h2 className="w-1/3 text-center scroll-m-20 text-3xl font-semibold first:mt-0">
          IronBlog
        </h2>
        <div className="w-1/3 flex justify-end">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search"
              className="w-48 pl-7 rounded-2xl"
            />
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-4 gap-4 p-4 w-full">
        {posts.map((frontMatter, idx) => (
          <div key={idx} className="break-inside-avoid">
          <Card
            key={idx}
            className="mb-4 w-full shadow-none border-none animate-appear"
          >
            <CardHeader>
              <CardTitle className="text-2xl">{frontMatter.title}</CardTitle>
              <CardDescription>{frontMatter.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={frontMatter.image.link}
                alt="Iron Blog Cover"
                className="w-full h-auto object-cover rounded-md"
                width={frontMatter.image.width}
                height={frontMatter.image.height}
              />
            </CardContent>
          </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
