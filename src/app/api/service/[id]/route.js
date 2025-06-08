import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
      const { id } = await params;
      // single service data fetch to database
      const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
      const service = await servicesCollection.findOne({ _id: new ObjectId(id) });
      return NextResponse.json(service);
};

export const DELETE = async (req, { params }) => {
      const { id } = await params;
      const query = { _id: new ObjectId(id) }
      const data = dbConnect(collectionNameObj.bookingCollection);

      // validation
      const session = await getServerSession(authOptions);
      const currentBooking = await data.findOne(query);
      const isOwnerOk = session?.user?.email == currentBooking.email;
      // deleting user specific booking
      if (isOwnerOk) {
            const result = await data.deleteOne(query);
            revalidatePath('/my-booking')
            return NextResponse.json(result)
      } else {
            return NextResponse.json({ success: false, message: "Forbidden Action" }, { status: 401 })
      }
}