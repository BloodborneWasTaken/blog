import ButtonIcon from '@/ui/ButtonIcon'
import { BookmarkIcon, ChatBubbleLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'

function PostIntractions({post}) {
  return (
    <div className='flex items-center gap-x-4'>
        <ButtonIcon variant="secodary">
<ChatBubbleLeftEllipsisIcon/>
{post.commentsCount}
        </ButtonIcon>
                <ButtonIcon variant="secodary">
<HeartIcon/>
{post.LikesCount}
        </ButtonIcon>
                <ButtonIcon variant="secodary">
<BookmarkIcon/>

        </ButtonIcon>
    </div>
  )
}

export default PostIntractions