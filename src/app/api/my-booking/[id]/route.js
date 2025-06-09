import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
      const { id } = await params;
      const query = { _id: new ObjectId(id) }
      const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
      const singleBooking = await bookingCollection.findOne(query)
      return NextResponse.json(singleBooking)
}
export const PATCH = async (req, { params }) => {
      const { id } = await params;
      const query = { _id: new ObjectId(id) }
      const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
      const data = req.json()
      const filter = {
            $set: { ...data }
      };
      const options = { upsert: true };
      const updateData = await bookingCollection.updateOne(query, filter, options);
      revalidatePath("/my-booking")
      return NextResponse.json(updateData)
}