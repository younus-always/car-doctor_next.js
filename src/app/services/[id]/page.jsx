import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaRegFilePdf } from "react-icons/fa";

const ServiceDetailsPage = async ({ params }) => {
      const { id } = await params;
      const res = await fetch(`http://localhost:3000/api/service/${id}`);
      const service = await res.json(res);
      const { _id, title, img, price, description, facility } = service || {};

      return (
            <>
                  <section className="max-w-7xl mx-auto py-10">
                        <div className="relative">
                              <figure className="flex justify-center w-full before:w-full before:h-full before:bg-gradient-to-l before:from-slate-950 before:via-black/15 before:to-slate-950 before:absolute before:top-0 before:left-0">
                                    <Image src={'/assets/images/checkout/checkout.png'} width={1280} height={300} alt="services banner" />
                              </figure>
                              <h2 className="absolute top-2/5 left-2/12 text-slate-50 font-semibold text-4xl">Service Details</h2>
                              <div className="absolute bottom-0 left-5/12 text-slate-50 bg-orange-500 px-6 py-2 flex items-center justify-center before:absolute before:left-0 before:top-0 before:bg-orange-500 before:w-2 before:h-full after:absolute after:w-2 after:h-full">
                                    <Link href={'/'}>Home</Link>
                                    <p>/Service Details</p>
                              </div>
                        </div>
                  </section>
                  <section className="max-w-7xl mx-auto py-10 grid grid-cols-12 gap-5">
                        <div className="col-span-8">
                              <Image src={img} alt="" width={752} height={400} />
                              <h3 className="text-4xl font-semibold py-7">{title}</h3>
                              <p className="text-gray-700">{description}</p>
                              <div className="grid grid-cols-2 gap-5 pt-6">
                                    {
                                          facility.map((f, idx) =>
                                                <div key={idx} className="p-5 rounded-lg bg-gray-200 border-t-4 border-t-orange-500">
                                                      <h4 className="text-xl font-bold pb-3">{f.name}</h4>
                                                      <p>{f.details}</p>
                                                </div>
                                          )
                                    }
                              </div>
                        </div>
                        <div className="col-span-4 space-y-6">
                              {/* services */}
                              <div className="bg-gray-200 rounded-lg p-7 space-y-4">
                                    <h5 className="text-2xl font-bold">Services</h5>
                                    <div className="flex items-center justify-between rounded p-4 bg-orange-500 text-slate-50">
                                          <p className="font-semibold">Full Car Repair</p>
                                          <FaArrowRight />
                                    </div>
                                    <div className="flex items-center justify-between rounded p-4 bg-white">
                                          <p className="font-semibold">Engine Repair</p>
                                          <FaArrowRight />
                                    </div>
                                    <div className="flex items-center justify-between rounded p-4 bg-white">
                                          <p className="font-semibold">Automatic Services</p>
                                          <FaArrowRight />
                                    </div>
                                    <div className="flex items-center justify-between rounded p-4 bg-white">
                                          <p className="font-semibold">Engine Oil Change</p>
                                          <FaArrowRight />
                                    </div>
                                    <div className="flex items-center justify-between rounded p-4 bg-white">
                                          <p className="font-semibold">Battery Charge</p>
                                          <FaArrowRight />
                                    </div>
                              </div>
                              {/* download */}
                              <div className="rounded-lg p-7 bg-slate-950 text-slate-50 space-y-3">
                                    <h5 className="text-2xl font-semibold">Download</h5>
                                    <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-3">
                                                <FaRegFilePdf size={20} />
                                                <div className="">
                                                      <h6 className="text-lg font-semibold">Our Bochure</h6>
                                                      <span className="text-gray-400 text-sm">Download</span>
                                                </div>
                                          </div>
                                          <p className="p-4 rounded bg-orange-500"><FaArrowRight /></p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-3">
                                                <FaRegFilePdf size={20} />
                                                <div className="">
                                                      <h6 className="text-lg font-semibold">Company Details</h6>
                                                      <span className="text-gray-400 text-sm">Download</span>
                                                </div>
                                          </div>
                                          <p className="p-4 rounded bg-orange-500"><FaArrowRight /></p>
                                    </div>
                              </div>
                              {/* need help */}
                              <div className="bg-slate-950 text-slate-50 p-7 rounded-lg space-y-3">
                                    <figure className="flex items-center justify-center">
                                          <Image src={"/assets/logo.svg"} alt="brand logo" width={141} height={114} />
                                    </figure>
                                    <p className="capitalize font-semibold text-center text-lg w-2/3 mx-auto">Need help? We are here to help you</p>
                                    <div className="bg-white p-4 rounded-lg text-center">
                                          <p className="text-orange-500 text-lg font-semibold">
                                                Car Doctor
                                                <span className="text-slate-950
                                                "> Special</span>
                                          </p>
                                          <p className="text-slate-950 text-lg font-semibold">
                                                Save upto
                                                <span className="text-orange-500
                                                "> 60% off</span>
                                          </p>
                                    </div>
                              </div>
                              {/* proceed to checkout */}
                              <div className="space-y-3">
                                    <p className="text-2xl font-bold">Price ${price}</p>
                                    <Link href={`/checkout/${_id}`}>
                                          <button type="button" className="w-full bg-orange-500 text-slate-50 font-semibold p-4 rounded-lg hover:bg-orange-400 duration-300 cursor-pointer">Proceed Checkout</button>
                                    </Link>
                              </div>
                        </div>
                  </section>
            </>
      )
}

export default ServiceDetailsPage
