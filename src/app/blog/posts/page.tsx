import Post from "@/app/ui/components/posts/Post";
import { connectToDB, getPosts } from "@/app/lib/databse";
import { Button } from "@/app/ui/components/button";
import Link from "next/link";


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
      <Link href="/blog/post/insert"><Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">New +</Button></Link>      
      {posts?.map((post) => (
        <Post 
          key={post.id} 
          id={post.id} 
          title={post.title} 
          content={post.content} 
          date={post.date} 
        />
      ))}
    </>
  );
}

//In <Post></Post> we have to define the props that we are passing to the component
//If we don't do that, we will get an error because the component is expecting props
//In typescript we need to define the type of the props that we are passing to the component
//Because it need props to be passed to it, in javascript we can pass props without defining the type of the props
//For example: <Post id={post.id} title={post.title} content={post.content} date={post.date} />