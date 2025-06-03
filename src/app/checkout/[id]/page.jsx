import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const CheckOutPage = async ({ params }) => {
      const { id } = await params;
      // single service data fetch to database
      const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
      const service = await servicesCollection.findOne({ _id: new ObjectId(id) });

      return (
            <div>
                  {JSON.stringify(service)}
            </div>
      )
}

export default CheckOutPage
