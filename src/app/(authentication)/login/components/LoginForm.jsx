"use client"
import { signIn } from "next-auth/react"
// import { useRouter } from "next/navigation";

const LoginForm = () => {
      // const router = useRouter();
      const handleSubmit = async (e) => {
            e.preventDefault()
            const form = e.target;
            let email = form.email.value;
            let password = form.password.value;
            try {
                  await signIn("credentials", { email, password, callbackUrl: "/" })
                  // router.push("/")
                  // console.log({ email, password })
            } catch (error) {
                  console.log(error)
                  alert("Authentication Failed!")
            }
      };

      return (
            <>
                  <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                              <label htmlFor="email" className="mb-2 font-bold block text-gray-700/90">Email</label>
                              <input type="email" name="email" id="email" placeholder="Your email" className="py-2 px-3 w-full rounded-lg outline-0 border border-orange-500 shadow-xs shadow-orange-400 focus:shadow-gray-400" />
                        </div>
                        <div>
                              <label htmlFor="password" className="mb-2 font-bold block text-gray-700/90">Password</label>
                              <input type="password" name="password" id="password" placeholder="Your password" autoComplete="current-pasword" className="py-2 px-3 w-full rounded-lg outline-0 border border-orange-500 shadow-xs shadow-orange-400 focus:shadow-gray-400" />
                        </div>
                        <button type="submit" className="w-full bg-orange-500 text-slate-50 font-bold rounded-lg py-2 cursor-pointer active:scale-95 duration-200 my-5">Sign In</button>
                  </form>
            </>
      )
}

export default LoginForm
