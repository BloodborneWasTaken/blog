import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";

import CoverImage from "./coverImage";
import PostIntractions from "./postIntractions";

async function BlogList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-12">
      {posts.map((post) => (
        <div
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-seondary-100 p-2 rounded-lg"
          key={post.id}
        >
          <CoverImage post={post} />
          <div className="gap-x-5">
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-1">
                <Image
                  src={post.author.avatarUrl || "/images/avatar.png"}
                  width={24}
                  height={24}
                  className="rounded-full ring-1 ring-secondary-300 ml-2"
                  alt={post.author.avatarUrl}
                />
                <span className="text-sm text-slate-500">
                  {post.author.name}
                </span>
              </div>
              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span className="ml-1">خواندن:</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
            <PostIntractions post={post} />
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default BlogList;
