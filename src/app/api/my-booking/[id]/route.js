import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
      const { id } = await params;
      const query = { _id: new ObjectId(id) }
      const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
      const singleBooking = await bookingCollection.findOne(query)
      return NextResponse.json(singleBooking)
}