"use client"
import { signIn } from "next-auth/react"
import { FaGithub } from "react-icons/fa6"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"

const SocialLogin = () => {
      const handleSocialLogin = async (loginType) => {
            console.log(loginType)
            const result = await signIn(loginType, { redirect: false })
            console.log(result)
      }

      return (
            <div className="flex items-center justify-center gap-3 my-5">
                  <button type="button" onClick={() => handleSocialLogin("google")} target="_blank" className="p-2 rounded-full bg-gray-200 text-blue-600 cursor-pointer"><FcGoogle /></button>
                  <button type="button" onClick={() => handleSocialLogin("github")} target="_blank" className="p-2 rounded-full bg-gray-200 cursor-pointer"><FaGithub /></button>
                  <button type="button" onClick={() => handleSocialLogin("facebook")} target="_blank" className="p-2 rounded-full bg-gray-200 text-blue-600 cursor-pointer"><FaFacebookF /></button>
                  <button type="button" onClick={() => handleSocialLogin("linkedIn")} target="_blank" className="p-2 rounded-full bg-gray-200 text-blue-600 cursor-pointer"><FaLinkedinIn /></button>
            </div>
      )
}

export default SocialLogin
