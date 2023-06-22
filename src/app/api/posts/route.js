import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";


export const POST = async (request) => {
  const body = await request.json();
  
  // return new Response(JSON.stringify(body),
  //   { status: 200 }
  // )
  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();
    // console.log("Saved");
    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
