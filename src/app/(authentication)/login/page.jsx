import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import LoginForm from "./components/LoginForm"

const LoginPage = () => {

      return (
            <section className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                        <Image src={"/assets/images/login/login.svg"} alt="register image" width={460} height={502} priority={true} />
                  </div>
                  <div className="max-w-xl py-10 px-8 border border-gray-300 rounded-lg">
                        <h3 className="text-3xl font-semibold text-center mb-5">Login</h3>
                        <LoginForm />
                        <p className="text-center text-gray-400">Or Sign In with</p>
                        <div className="flex items-center justify-center gap-3 my-5">
                              <Link href={"https://facebook.com"} target="_blank" className="p-2 rounded-full bg-gray-200 text-blue-600"><FaFacebookF /></Link>
                              <Link href={"https://www.linkedin.com"} target="_blank" className="p-2 rounded-full bg-gray-200 text-blue-600"><FaLinkedinIn /></Link>
                              <Link href={"https://www.google.com"} target="_blank" className="p-2 rounded-full bg-gray-200 text-blue-600"><FcGoogle /></Link>
                        </div>
                        <p className="text-center text-gray-600">Don't have an account?<Link href={"/register"} className="text-orange-500 font-semibold"> Sign Up</Link></p>
                  </div>
            </section>
      )
}

export default LoginPage
