import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
      const data = await req.json();
      console.log(data)
      // single service data fetch to database
      const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
      const result = await bookingCollection.insertOne(data);
      return NextResponse.json(result);
};