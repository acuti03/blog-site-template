import { Separator } from "@/components/ui/separator";
import { getSortedPostsData } from "@/lib/posts";
import SearchBar from "@/components/searchBar";
import Posts from "@/components/Posts";
//import Logo from "@/public/Logo.png";

type SearchParams = Promise<{ [key: string]: string | undefined }>

export default async function Home(props : { searchParams: SearchParams }) {
  //const dd = Array.from({ length: 12 }).map(() => getRandomSize());
  const posts = getSortedPostsData();
  const searchParams = await props.searchParams;
  const { q } = searchParams;

  console.log("query:", q);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-between">
        <div className="w-1/3" />
        <h2 className="w-1/3 text-center scroll-m-20 text-3xl font-semibold first:mt-0">
          IronBlog
        </h2>
        <div className="w-1/3 flex justify-end">
          <div className="relative">
            <SearchBar />
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-4 gap-4 p-4 w-full">
        <Posts q={q} allPosts={posts} />
      </div>
    </div>
  );
}
