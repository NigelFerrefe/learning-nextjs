import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { auth } from "../../../../auth.config";

export async function GET() {
  try {
    const posts = await sql`SELECT * FROM posts;`;
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  //Get auth
  const session = await auth()


  const { searchParams } = new URL(request.url);
  //This is for getting the body of the request
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const content = searchParams.get("content");
  const date = searchParams.get("date");
  //All those values are going to be inserted into the database
  //We have to use the sql tag to insert the values into the database
  const author = searchParams.get('author')

  
  //Protect the api as well
  try {
    if(!session) {
      return NextResponse.json({ message: "User not authenticated" }, { status: 401 });
    }
    // SQL query to insert the values into the database
    await sql`INSERT INTO posts (id, author, title, content, date) VALUES (${id}, ${author} , ${title}, ${content}, ${date})`;
    return NextResponse.json({ message: "Post created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
    
  }
}
