import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const ServiceDetailsPage = async ({ params }) => {
      const { id } = await params;
      const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
      const service = await servicesCollection.findOne({ _id: new ObjectId(id) });
      console.log(service)
      const { title, img, price, description, facility } = service || {};

      return (
            <section>
                  <div>

                  </div>
            </section>
      )
}

export default ServiceDetailsPage
