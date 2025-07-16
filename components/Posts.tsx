"use client";

import { useState, useEffect } from "react";
import CustomCard from "./customCard";
import { type FrontMatter } from "@/lib/posts";

type Posts = (FrontMatter & { id: string })[];
type Props = {
  q: string | undefined,
  allPosts: Posts,
  loadImage?: boolean
};

export default function Posts({ q, allPosts, loadImage = true }: Props) {

  const [posts, setPosts] = useState<Posts>(allPosts);

  useEffect(() => {
    if (q) {
      const filtered = allPosts.filter((post) =>
        post.title.toLowerCase().includes(q.toLowerCase())
      );
      setPosts(filtered);
    } else {
      setPosts(allPosts); // mostra tutti se non c'è ricerca
    }
  }, [allPosts, q]);

  return (
    <>
      {posts.map((frontMatter, idx) => (
        <div key={idx} className="break-inside-avoid">
          <CustomCard idx={idx} loadImage={loadImage !== undefined && loadImage} frontMatter={frontMatter} />
        </div>
      ))}
    </>
  );
}
