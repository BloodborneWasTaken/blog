import Image from "next/image";

export async function generateMetadata({params}){
const postSlug = params.postSlug
const res = await fetch(
  `http://localhost:5000/api/post/slug/${postSlug}`
)

const {data} = await res.json();
if (!data || !data.post){
  return {
    title :' post cannot be found',
description : ' null'
  }
}
 const {post} = data;

 
    return {
    title : post.title,
description: post.brieftext  
  }
 
}



export default async function Page({ params }) {
  const postSlug = await params.postSlug;
  const res = await fetch(`http://localhost:5000/api/post/slug/${postSlug}`, {
    cache: 'no-store',
  });

  const json = await res.json();
  console.log('API response:', json);



  const { post } = json.data;

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8 whitespace-pre-line">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          src={post.coverImageUrl}
          alt={post.briefText}
          fill
          className="object-cover object-center hover:scale-110 transition-all duration-300"
        />
      </div>
    </div>
  );
}
