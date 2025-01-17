import Post from "@/app/ui/components/posts/Post";
import { connectToDB, getPosts } from "@/app/lib/databse";
import { Button } from "@/app/ui/components/button";

export default async function Page() {
  const client = await connectToDB();
  //client is a const that holds the connection to the database
  const posts = await getPosts();
  //posts is a const that holds the data from the database
  console.log('Posts data:', posts);

  return (
    <>
      {client && <h1 className="text-green-500">Connected to database</h1>}
      <h1>Posts</h1>
      <Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">New +</Button>
      {posts?.map((post) => <Post key={post.id} {...post} />)}
    </>
  );
}
