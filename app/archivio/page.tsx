import React from "react";
import Posts from "@/components/Posts";
import { getSortedPostsData } from "@/lib/posts";

export default async function page() {
  const posts = getSortedPostsData();

  return (
    <div className="flex felx-col items-center">
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-4 gap-4 p-4 w-full">
        <Posts allPosts={posts} q={undefined} loadImage={false} />
      </div>
    </div>
  );
}
