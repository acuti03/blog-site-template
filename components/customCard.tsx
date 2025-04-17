"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { FrontMatter } from "@/lib/posts";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  idx: number,
  frontMatter : FrontMatter & {id: string};
}

export default function CustomCard({ idx, frontMatter } : Props) {

  const router = useRouter();

  return (
    <Card
      key={idx}
      className="mb-4 w-full shadow-none border-none animate-appear"
    >
      <CardHeader>
        <CardTitle className="text-2xl hover:text-blue-500 cursor-pointer" onClick={() => router.push(`/posts/${frontMatter.id}`)}>
          {frontMatter.title}
        </CardTitle>
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
  );
}
