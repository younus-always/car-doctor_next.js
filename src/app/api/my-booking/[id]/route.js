import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
      const { id } = await params;
      const query = { _id: new ObjectId(id) }
      const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
      // user check
      const session = await getServerSession(authOptions)
      const email = session?.user?.email
      const singleBooking = await bookingCollection.findOne(query)
      const isOwnerOk = singleBooking?.email === email
      if (isOwnerOk) {
            return NextResponse.json(singleBooking)
      } else {
            return NextResponse.json({ message: "Forbidden Get Action" }, { status: 403 })
      }
}
export const PATCH = async (req, { params }) => {
      const { id } = await params;
      const query = { _id: new ObjectId(id) }
      const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
      // user check
      const session = await getServerSession(authOptions)
      const email = session?.user?.email
      const singleBooking = await bookingCollection.findOne(query)
      const isOwnerOk = singleBooking?.email === email
      if (isOwnerOk) {
            const data = req.json()
            const filter = {
                  $set: { ...data }
            };
            const options = { upsert: true };
            const updateData = await bookingCollection.updateOne(query, filter, options);
            revalidatePath("/my-booking")
            return NextResponse.json(updateData)
      } else {
            return NextResponse.json({ message: "Forbidden Update Action" }, { status: 403 })
      }
}