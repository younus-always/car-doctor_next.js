"use client"

const CheckOutForm = ({ service }) => {
      // console.log(service)

      const handleSubmit = (e) => {
            e.preventDefault()
            const form = new FormData(e.target)
            const name = form.get('fullName')
            const email = form.get('email')
            const phone = form.get('number')
            const amount = form.get('amount')
            const date = form.get('date')
            const address = form.get('address')
            console.log({ name, email, phone, amount, date, address })
      };

      return (
            <section className="mx-auto max-w-7xl bg-gray-200 rounded-lg shadow-lg py-12 my-10">
                  <div className="mx-auto max-w-5xl">
                        <form onSubmit={handleSubmit} className="space-y-4">
                              <div className="space-x-3 flex">
                                    <div className="flex-1">
                                          <label htmlFor="fullName" className="label block pb-2">Name*</label>
                                          <input
                                                type="text"
                                                name="fullName"
                                                id="fullName"
                                                placeholder="Your Name"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                                required
                                          />
                                    </div>
                                    <div className="flex-1">
                                          <label htmlFor="email" className="label block pb-2">Email*</label>
                                          <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                                required
                                          />
                                    </div>
                              </div>
                              <div className="space-x-3 flex">
                                    <div className="flex-1">
                                          <label htmlFor="number" className="label block pb-2">Phone Number*</label>
                                          <input
                                                type="number"
                                                name="number"
                                                id="number"
                                                placeholder="Your Phone"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                                required
                                          />
                                    </div>
                                    <div className="flex-1">
                                          <label htmlFor="amount" className="label block pb-2">Amount*</label>
                                          <input
                                                type="number"
                                                name="amount"
                                                id="amount"
                                                placeholder="Amount"
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
                                                placeholder=""
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
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                                required
                                          />
                                    </div>
                              </div>
                              <button type="submit"
                                    className="w-full bg-orange-500 font-bold py-2 rounded-lg text-slate-50 cursor-pointer active:scale-95 duration-200 mt-3">
                                    Order Confirm
                              </button>
                        </form>
                  </div>
            </section>
      )
}

export default CheckOutForm
