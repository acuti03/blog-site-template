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
        {/* <Image src={Logo} alt="" width={100} height={50} className="border" /> */}
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
      <div className="columns-2 gap-4 space-y-4 p-4 border w-full">
      {posts.map(({ date, title, image, width, height }, idx) => (
        <div key={idx} className="break-inside-avoid">
          <Card className="w-full shadow-none border-none">
            <CardHeader>
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription>
                {date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={image}
                alt="Iron Blog Cover"
                className="w-full h-auto object-cover rounded-md"
                width={width}
                height={height}
              />
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </div>
  )
}
