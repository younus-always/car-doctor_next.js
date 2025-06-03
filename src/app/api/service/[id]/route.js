import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
      const { id } = await params;
      // single service data fetch to database
      const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
      const service = await servicesCollection.findOne({ _id: new ObjectId(id) });
      return NextResponse.json(service);
};