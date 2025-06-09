"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BookingUpdateForm = ({ data }) => {
      const { data: session } = useSession();
      const router = useRouter()

      const handleSubmit = async (e) => {
            toast.success("Submitting Booking....")
            e.preventDefault()
            const form = new FormData(e.target)
            const phone = form.get('number')
            const date = form.get('date')
            const address = form.get('address')

            const bookingPayload = {
                  phone,
                  date,
                  address
            };
            // post service to database
            const res = await fetch(`http://localhost:3000/api/my-booking/${id}`, {
                  method: "PATCH",
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify(bookingPayload)
            });
            const postedData = await res.json();
            console.log("Updated data response", postedData)
            router.push("/my-booking")
      };

      return (
            <section className="mx-auto max-w-7xl bg-gray-200 rounded-lg shadow-lg py-12 my-10">
                  <div className="mx-auto max-w-5xl">
                        <form onSubmit={handleSubmit} className="space-y-4">
                              <div className="space-x-3 flex">
                                    <div className="flex-1">
                                          <label htmlFor="fullName" className="label block pb-2">Name*</label>
                                          <input
                                                defaultValue={session?.user?.name}
                                                readOnly
                                                id="fullName"
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                          />
                                    </div>
                                    <div className="flex-1">
                                          <label htmlFor="email" className="label block pb-2">Email*</label>
                                          <input
                                                defaultValue={session?.user?.email}
                                                readOnly
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400" />
                                    </div>
                              </div>
                              <div className="space-x-3 flex">
                                    <div className="flex-1">
                                          <label htmlFor="amount" className="label block pb-2">Amount*</label>
                                          <input
                                                defaultValue={data?.service_price}
                                                readOnly
                                                type="number"
                                                id="amount"
                                                placeholder="Amount"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                          />
                                    </div>
                                    <div className="flex-1">
                                          <label htmlFor="number" className="label block pb-2">Phone Number*</label>
                                          <input
                                                type="number"
                                                name="number"
                                                id="number"
                                                defaultValue={data?.phone}
                                                placeholder="Your Phone"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                                required
                                          />
                                    </div>

                              </div>
                              <div className="space-x-3 flex">
                                    <div className="flex-1">
                                          <label htmlFor="date" className="label block pb-2">Date*</label>
                                          <input
                                                type="date"
                                                name="date"
                                                id="date"
                                                defaultValue={data?.date}
                                                className="w-full text-gray-500 bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                                required
                                          />
                                    </div>
                                    <div className="flex-1">
                                          <label htmlFor="address" className="label block pb-2">Address*</label>
                                          <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                defaultValue={data?.address}
                                                placeholder="Your Address"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                                required
                                          />
                                    </div>
                              </div>
                              <button type="submit"
                                    className="w-full bg-orange-500 font-bold py-2 rounded-lg text-slate-50 cursor-pointer active:scale-95 duration-200 mt-3npm">
                                    Order Confirm
                              </button>
                        </form>
                  </div>
            </section>
      )
}

export default BookingUpdateForm
