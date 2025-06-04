"use client"
import { useState } from "react";

const CheckOutForm = () => {
      const [firstNameError, setFirstNameError] = useState('');
      const [lastNameError, setLastNameError] = useState('');
      const [phoneError, setPhoneError] = useState('');
      const [emailError, setEmailError] = useState('');
      const [messageError, setMessageError] = useState('');

      const handleSubmit = (e) => {
            e.preventDefault()
            const form = new FormData(e.target)
            const fName = form.get('firstName')
            const lName = form.get('lastName')
            const email = form.get('email')
            const phone = form.get('number')
            const msg = form.get('message')

            setFirstNameError('')
            setLastNameError('')
            setEmailError('')
            setPhoneError('')
            setMessageError('')

            if (!fName) setFirstNameError("⚠️ First-Name is required!")
            if (!lName) setLastNameError("⚠️ Last-Name is required!")
            if (!email) setEmailError("⚠️ Email is required")
            if (!phone) setPhoneError("⚠️ Phone number is required")
            if (!msg) setMessageError("Please provide your message!")

            console.log(fName.trim(), lName.trim(), email.trim(), phone.trim(), msg.trim())
      };

      return (
            <section className="mx-auto max-w-7xl bg-gray-200 rounded-lg shadow-lg py-12 my-10">
                  <div className="mx-auto max-w-5xl">
                        <form onSubmit={handleSubmit} className="space-y-4">
                              <div className="space-x-3 flex">
                                    <div className="flex-1">
                                          <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First name"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                          />
                                          <p className="text-red-600 font-semibold pt-1">{firstNameError ? firstNameError : ''}</p>
                                    </div>
                                    <div className="flex-1">
                                          <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                          />
                                          <p className="text-red-600 font-semibold pt-1">{lastNameError ? lastNameError : ''}</p>
                                    </div>
                              </div>
                              <div className="space-x-3 flex">
                                    <div className="flex-1">
                                          <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                          />
                                          <p className="text-red-600 font-semibold pt-1">{emailError ? emailError : ''}</p>
                                    </div>
                                    <div className="flex-1">
                                          <input
                                                type="number"
                                                name="number"
                                                placeholder="Your Phone"
                                                className="w-full bg-white rounded-md px-2 py-2 outline-none focus:placeholder-gray-400"
                                          />
                                          <p className="text-red-600 font-semibold pt-1">{phoneError ? phoneError : ''}</p>
                                    </div>
                              </div>
                              <div>
                                    <textarea
                                          name="message"
                                          placeholder="Your Message..."
                                          className="w-full min-h-52 max-h-80 bg-white rounded-md p-2 outline-none focus:placeholder-gray-400" />
                                    <p className="text-red-600 font-semibold pt-1">{messageError ? messageError : ''}</p>
                              </div>
                              <button type="submit"
                                    className="w-full bg-orange-500 font-bold py-2 rounded-lg text-slate-50 cursor-pointer active:scale-95 duration-200">
                                    Order Confirm
                              </button>
                        </form>
                  </div>
            </section>
      )
}

export default CheckOutForm
