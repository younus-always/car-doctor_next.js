"use client"
const CheckOutForm = () => {
      const handleSubmit = (e) => {
            e.preventDefault()
      };

      return (
            <section className="mx-auto max-w-7xl bg-gray-200 rounded-lg shadow-lg drop-shadow-md py-8 my-10">
                  <div className="mx-auto max-w-5xl">
                        <form onSubmit={handleSubmit}>
                              <div className="px-4 pt-3 pb-6 space-y-3">
                                    <div className="space-x-3 flex">
                                          <input
                                                type="text"
                                                id="firstName"
                                                placeholder="First name"
                                                className="flex-1 ring-1 bg-white ring-gray-400 rounded-md px-2 py-2 outline-none focus:placeholder-gray-500"
                                          />
                                          <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                className="flex-1 ring-1 bg-white ring-gray-400 rounded-md px-2 py-2 outline-none focus:placeholder-gray-500"
                                          />
                                    </div>
                                    <div className="space-x-3 flex">
                                          <input
                                                type="number"
                                                placeholder="Your Phone"
                                                className="flex-1 ring-1 bg-white ring-gray-400 rounded-md px-2 py-2 outline-none focus:placeholder-gray-500"
                                          />
                                          <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                className="flex-1 ring-1 bg-white ring-gray-400 rounded-md px-2 py-2 outline-none focus:placeholder-gray-500"
                                          />
                                    </div>
                                    <div>
                                          <textarea name="message" placeholder="Your Message..." className="w-full min-h-52 max-h-80 ring-1 bg-white ring-gray-400 rounded-md p-2 outline-none focus:placeholder-gray-500"></textarea>
                                    </div>
                                    <button
                                          className="w-full bg-orange-500 font-bold py-2 rounded-lg text-slate-50">
                                          Order Confirm
                                    </button>
                              </div>
                        </form>
                  </div>
            </section>
      )
}

export default CheckOutForm
