"use client"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navber = () => {
      const pathname = usePathname()
      const session = useSession()
      const { data, status } = session;
      console.log(data, status)
      if (pathname.includes("register") || pathname.includes("login")) return <></>

      return (
            <nav className="max-w-7xl mx-auto">
                  <div className="navbar bg-base-100">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                    </div>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                          <li><Link href="#">Home</Link></li>
                                          <li><Link href="#">About</Link></li>
                                          <li><Link href="#">Services</Link></li>
                                          <li><Link href="#">Blog</Link></li>
                                          <li><Link href="#">Contact</Link></li>
                                    </ul>
                              </div>
                              <Link href={'/'}>
                                    <Image src={'./assets/logo.svg'} width={80} height={50} alt="logo" />
                              </Link>
                        </div>
                        {/* large device menu */}
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal space-x-2 text-lg font-semibold">
                                    <li><Link href="/" className="hover:bg-orange-500 hover:text-slate-50 duration-300">Home</Link>
                                    </li>
                                    <li>
                                          <Link href="/" className="hover:bg-orange-500 hover:text-slate-50 duration-300">About</Link>
                                    </li>
                                    <li>
                                          <Link href="/" className="hover:bg-orange-500 hover:text-slate-50 duration-300">Services</Link>
                                    </li>
                                    <li>
                                          <Link href="/" className="hover:bg-orange-500 hover:text-slate-50 duration-300">Blog</Link>
                                    </li>
                                    <li>
                                          <Link href="/" className="hover:bg-orange-500 hover:text-slate-50 duration-300">Contact</Link>
                                    </li>
                              </ul>
                        </div>
                        <div className="navbar-end gap-2">
                              {status == 'authenticated' ?
                                    <button type="button" onClick={() => signOut()} className="py-2 px-3 rounded-lg border font-semibold cursor-pointer">Logout</button> :
                                    <>
                                          <Link href={'/register'}>Sign Up</Link>
                                          <Link href={'/login'}>Sign In</Link>
                                    </>}
                              <button type="button" className="btn border-2 border-orange-500 text-lg py-4 font-semibold hover:bg-orange-600 hover:text-slate-50 text-orange-500 duration-300">Appointment</button>
                        </div>
                  </div>
            </nav>
      )
}

export default Navber
