import { getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import React from "react";
import Date from "@/components/date";
import Link from "next/link";
import Image from "next/image";

async function getData({ params }: { params: Promise<{ id: string }> }) {
  const postData = await getPostData((await params).id);

  return postData;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const post = (await params).id;

  return {
    title: post,
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //const { id } = await params;
  const postData = await getData({ params });

  if (postData === undefined) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center">
      <article className="flex flex-col w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {postData.title}
        </h1>
        <p className="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
          <Date dateString={postData.date} />
        </p>
        <Image
          src={postData.image.link}
          alt="Post Image"
          className="rounded-lg mt-4 mb-4 w-full"
          width={postData.image.width}
          height={postData.image.height}
        />
        <div
          className="prose prose-neutral dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <Link href="/" replace className="text-[#0070f3] font-medium mt-[10%]">
          ← Back to home
        </Link>
      </article>
    </div>
  );
}
