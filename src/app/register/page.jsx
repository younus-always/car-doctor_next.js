"use client"
import Image from "next/image"
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {

      const handleSubmit = (e) => {
            e.preventDefault()
            const form = e.target;
            console.log(form.username.value)
      };

      return (
            <section className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                        <Image src={"/assets/images/login/login.svg"} alt="register image" width={460} height={502} />
                  </div>
                  <div className="max-w-xl py-10 px-8 border border-gray-300 rounded-lg">
                        <h3 className="text-3xl font-semibold text-center mb-5">Sign Up</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                              <div>
                                    <label htmlFor="username" className="mb-2 font-bold block text-gray-700/90">Name</label>
                                    <input type="text" name="username" id="username" placeholder="Your Name" className="py-2 px-3 w-full rounded-lg outline-0 border border-orange-500 shadow-xs shadow-orange-400 focus:shadow-gray-400" />
                              </div>
                              <div>
                                    <label htmlFor="email" className="mb-2 font-bold block text-gray-700/90">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Your email" className="py-2 px-3 w-full rounded-lg outline-0 border border-orange-500 shadow-xs shadow-orange-400 focus:shadow-gray-400" />
                              </div>
                              <div>
                                    <label htmlFor="password" className="mb-2 font-bold block text-gray-700/90">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Your password" className="py-2 px-3 w-full rounded-lg outline-0 border border-orange-500 shadow-xs shadow-orange-400 focus:shadow-gray-400" />
                              </div>
                              <button type="submit" className="w-full bg-orange-500 text-slate-50 font-bold rounded-lg py-2 cursor-pointer active:scale-95 duration-200 my-5">Sign Up</button>
                        </form>
                        <p className="text-center text-gray-400">Or Sign Up with</p>
                        <div className="flex items-center justify-center gap-3 my-5">
                              <Link href={"https://facebook.com"} target="_blank" className="p-2 rounded-full bg-gray-200 text-blue-600"><FaFacebookF /></Link>
                              <Link href={"https://www.linkedin.com"} target="_blank" className="p-2 rounded-full bg-gray-200 text-blue-600"><FaLinkedinIn /></Link>
                              <Link href={"https://www.google.com"} target="_blank" className="p-2 rounded-full bg-gray-200 text-blue-600"><FcGoogle /></Link>
                        </div>
                        <p className="text-center text-gray-600">Already have an account?<Link href={"/login"} className="text-orange-500 font-semibold">Login</Link></p>
                  </div>
            </section>
      )
}

export default RegisterPage
