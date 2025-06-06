import CheckOutForm from "@/components/forms/CheckOutForm";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

const CheckOutPage = async ({ params }) => {
      const { id } = await params;
      // single service data fetch to database
      const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
      const service = await servicesCollection.findOne({ _id: new ObjectId(id) });

      return (
            <>
                  <section className="max-w-7xl mx-auto py-10">
                        <div className="relative">
                              <figure className="flex justify-center w-full before:w-full before:h-full before:bg-gradient-to-l before:from-slate-950 before:via-black/15 before:to-slate-950 before:absolute before:top-0 before:left-0">
                                    <Image src={'/assets/images/checkout/checkout.png'} width={1280} height={300} alt="services banner" />
                              </figure>
                              <h2 className="absolute top-2/5 left-2/12 text-slate-50 font-semibold text-4xl">Check Out</h2>
                              <div className="absolute bottom-0 left-5/12 text-slate-50 bg-orange-500 px-6 py-2 flex items-center justify-center before:absolute before:left-0 before:top-0 before:bg-orange-500 before:w-2 before:h-full after:absolute after:w-2 after:h-full">
                                    <Link href={'/'}>Home</Link>
                                    <p>/CheckOut</p>
                              </div>
                        </div>
                  </section>
                  <CheckOutForm service={service}/>
            </>
      )
}

export default CheckOutPage
