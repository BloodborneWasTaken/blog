import Image from "next/image";

export default async function Page({ params }) {
  const lug = await params.postSlug;
  const res = await fetch(`http://localhost:5000/api/post/slug/${lug}`, {
    cache: 'no-store',
  });

  const json = await res.json();
  console.log('API response:', json);

  if (!json?.data?.post) {
    return <div className="p-6 text-red-500">Post not found</div>;
  }

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
