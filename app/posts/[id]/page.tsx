import { getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import React from 'react'
import Date from '@/components/date';


async function getData({ params } : { params: Promise<{id: string}> }) {
  const postData = await getPostData((await params).id);

  return postData;
}

export async function generateMetadata({ params } : { params: Promise<{id: string}>}) {
  const post = (await params).id;

  return {
    title: post,
  };
}

export default async function page({ params } : { params: Promise<{id: string}> }) {

  //const { id } = await params;
  const postData = await getData({ params });

  if (postData === undefined) {
    return notFound();
  }

  console.log("html:", postData.contentHtml);

  return (
    <div>
      <div>
        <title>{postData.title}</title>
      </div>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div className="prose prose-neutral dark:prose-invert" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}
