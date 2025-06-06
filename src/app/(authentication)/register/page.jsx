"use client"
import { registerUser } from "@/app/actions/auth/registerUser"
import Image from "next/image"
import Link from "next/link"
import SocialLogin from "../login/components/SocialLogin"

const RegisterPage = () => {

      const handleSubmit = async (e) => {
            e.preventDefault()
            const form = e.target;
            let name = form.username.value;
            let email = form.email.value;
            let password = form.password.value;
            name = name.trim();
            password = password.trim();
            await registerUser({ name, email, password })
      };

      return (
            <section className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                        <Image src={"/assets/images/login/login.svg"} alt="register image" width={460} height={502} priority={true} />
                  </div>
                  <div className="max-w-xl py-10 px-8 border border-gray-300 rounded-lg">
                        <h3 className="text-3xl font-semibold text-center mb-5">Sign Up</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                              <div>
                                    <label htmlFor="username" className="mb-2 font-bold block text-gray-700/90">Name</label>
                                    <input type="text" name="username" id="username" placeholder="Your Name" autoComplete="username" className="py-2 px-3 w-full rounded-lg outline-0 border border-orange-500 shadow-xs shadow-orange-400 focus:shadow-gray-400" />
                              </div>
                              <div>
                                    <label htmlFor="email" className="mb-2 font-bold block text-gray-700/90">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Your email" autoComplete="email" className="py-2 px-3 w-full rounded-lg outline-0 border border-orange-500 shadow-xs shadow-orange-400 focus:shadow-gray-400" />
                              </div>
                              <div>
                                    <label htmlFor="password" className="mb-2 font-bold block text-gray-700/90">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Your password" autoComplete="current-password" className="py-2 px-3 w-full rounded-lg outline-0 border border-orange-500 shadow-xs shadow-orange-400 focus:shadow-gray-400" />
                              </div>
                              <button type="submit" className="w-full bg-orange-500 text-slate-50 font-bold rounded-lg py-2 cursor-pointer active:scale-95 duration-200 my-5">Sign Up</button>
                        </form>
                        <p className="text-center text-gray-400">Or Sign Up with</p>
                        <SocialLogin />
                        <p className="text-center text-gray-600">Already have an account?<Link href={"/login"} className="text-orange-500 font-semibold"> Sign In</Link></p>
                  </div>
            </section>
      )
}

export default RegisterPage
