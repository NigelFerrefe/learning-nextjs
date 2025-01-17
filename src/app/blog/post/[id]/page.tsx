import { getPosts } from "@/app/lib/databse";
import Post from "@/app/ui/components/posts/Post";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === params.id);
  if (!post) {
    return notFound();
  }
  return (
    <>
      <h1>Post</h1>
      {post && (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      )}
    </>
  );
}
