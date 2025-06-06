import Image from "next/image"
import SectionHeader from "./SectionHeader"
import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceSection = async () => {

      // services data fetch to database
      const serviceCollection = dbConnect(collectionNameObj.servicesCollection);
      const data = await serviceCollection.find({}).toArray();

      return (
            <section className="max-w-6xl mx-auto py-8">
                  <SectionHeader title={'Our Service Area'} subTitle={'Service'} />
                  <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-y-4 md:gap-0">
                        {
                              data.map(service =>
                                    <div key={service._id} className="rounded-lg p-4 border-2 border-gray-200 mx-auto">
                                          <Image src={service.img} alt="service photo" width={314} height={208} className="rounded-lg h-52 object-cover" />
                                          <div className="max-w-[314]">
                                                <h3 className="text-xl font-bold my-2">{service.title}</h3>
                                                <div className="flex items-center justify-between">
                                                      <p className="font-semibold text-orange-500">Price: ${service.price}</p>
                                                      <Link href={`/services/${service._id}`} className="bg-orange-500 text-slate-50 p-2 rounded-full text-xs hover:bg-gray-100 hover:text-orange-500 duration-300">
                                                            <FaArrowRight />
                                                      </Link>
                                                </div>
                                          </div>
                                    </div>)
                        }
                  </div>
            </section>
      )
}

export default ServiceSection
