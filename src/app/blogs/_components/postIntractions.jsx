"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function PostIntractions({ post }) {
  console.log(post);
  return (
    <div className="flex items-center gap-x-4">
      <ButtonIcon variant="secodary">
        <ChatBubbleLeftEllipsisIcon />
        {toPersianDigits(post.commentsCount)}
      </ButtonIcon>
      <ButtonIcon variant="red">
        <HeartIcon />
        {toPersianDigits(post.likesCount)}
      </ButtonIcon>
      <ButtonIcon variant="secodary">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
}

export default PostIntractions;
