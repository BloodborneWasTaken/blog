import { getPosts } from "@/services/postServices";
import Image from "next/image";


export async function generateMetadata({ params }) {
  const slug = params.postSlug;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  console.log(data);
  if (!data || !data.post) {
    return {
      title: "post not found!!",
      description: "invalid URL your post looking for is not available!?",
    };
  }
  else{
    console.log(data.post.title)
    return{
      title: data.post.title,
      description: data.post.briefText
    }
  }
}
const dynamicParams = false
export async function generateStaticParams(){
const {posts} = await getPosts()
const slugs = posts.map((post)=> ({slug : post.slug}))
return slugs;
}
export default async function Page({ params }) {
  const slug = await params.postSlug;
  const res = await fetch(`http://localhost:5000/api/post/slug/${slug}`, {
  });

  const {data} = await res.json();
  console.log('API response:', data);

  // this part of code should be because when the 'return <div ....></div>' being implemented another parts will not implemented but if this part be implemented error.jsx will not work true
  // if (!data?.post) {
  //   return <div className="p-6 text-red-500">Post not found</div>;
  // }


  const post  = data?.post
  console.log(post.title)
  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post?.title}
      </h1>
      <p className="mb-4">{post?.briefText}</p>
      <p className="mb-8 whitespace-pre-line">{post?.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          src={ post?.coverImageUrl }
          alt={post?.briefText}
          fill
          className="object-cover object-center hover:scale-110 transition-all duration-300"
        />
      </div>
    </div>
  );
}
