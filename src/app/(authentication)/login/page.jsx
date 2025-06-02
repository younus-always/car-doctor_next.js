import Link from "next/link"
import Image from "next/image"
import LoginForm from "./components/LoginForm"
import SocialLogin from "./components/SocialLogin"

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
                        <SocialLogin />
                        <p className="text-center text-gray-600">Don't have an account? <Link href={"/register"} className="text-orange-500 font-semibold  hover:underline hover:underline-offset-2">Sign Up</Link></p>
                  </div>
            </section>
      )
}

export default LoginPage
