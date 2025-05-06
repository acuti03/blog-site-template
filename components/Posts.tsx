"use client";

import { useState, useEffect } from "react";
import CustomCard from "./customCard";
import { type FrontMatter } from "@/lib/posts";

type Posts = (FrontMatter & { id: string })[];

export default function Posts({ q, allPosts }: { q: string | undefined, allPosts: Posts }) {

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
  }, [q]);

  return (
    <>
      {posts.map((frontMatter, idx) => (
        <div key={idx} className="break-inside-avoid">
          <CustomCard idx={idx} frontMatter={frontMatter} />
        </div>
      ))}
    </>
  );
}
