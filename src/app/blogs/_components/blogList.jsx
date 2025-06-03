async function BlogList() {
  const res = await fetch("http://localhost:5000/api/post/list");
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const jsonData = await res.json();
  console.log("Response JSON:", jsonData);

  // Adjust based on actual structure
  const posts = jsonData.posts || jsonData.data?.posts || [];
console.log(posts)
  return (
    <>
      {posts.map((post) => (

          <div>{post.title}</div>

      ))}
    </>
  );
}

export default BlogList;

