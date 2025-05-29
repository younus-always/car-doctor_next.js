import Image from "next/image"
import Link from "next/link"

const ErrorPage = () => {
      return (
            <section className="py-8">
                  <div className="flex items-center justify-center">
                        <Image src={'/assets/error.jpg'} alt="404 image" width={660} height={440} />
                  </div>
                  <Link href={'/'} className="w-40 mx-auto block py-2 text-center rounded-md bg-orange-500 text-slate-50 font-semibold ">Back to home</Link>
            </section>
      )
}

export default ErrorPage
