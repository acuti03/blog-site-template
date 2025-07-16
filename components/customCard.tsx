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
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  idx: number;
  loadImage?: boolean;
  frontMatter: FrontMatter & { id: string };
};

export default function CustomCard({
  idx,
  frontMatter,
  loadImage = true,
}: Props) {
  const router = useRouter();

  return (
    <Card
      key={idx}
      className="mb-4 w-full shadow-none border-none animate-appear"
    >
      <CardHeader>
        <CardTitle
          className="text-2xl hover:text-[#0070f3] cursor-pointer"
          onClick={() => router.push(`/posts/${frontMatter.id}`)}
        >
          {frontMatter.title}
        </CardTitle>
        <CardDescription>{frontMatter.date}</CardDescription>
      </CardHeader>
      <CardContent>
        {loadImage && (
          <>
          <Image
            src={frontMatter.image.link}
            alt="Iron Blog Cover"
            className="w-full h-auto object-cover rounded-md"
            width={frontMatter.image.width}
            height={frontMatter.image.height}
          />
          </>
        )}
        <div className={cn(loadImage ? "flex gap-0.5 mt-5" : "flex gap-0.5 mt-[-15px]")}>
          {frontMatter.tags.map((tag, idx) => (
            <Badge key={idx} className="rounded-full bg-sky-100 text-sky-500">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
