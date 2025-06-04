"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6"

const Footer = () => {
      const pathname = usePathname()
      if (pathname.includes("register") || pathname.includes("login")) return <></>

      return (
            <footer className="bg-slate-900 ">
                  <section className="max-w-7xl mx-auto">
                        <div className="footer sm:footer-horizontal py-10 text-slate-100">
                              <aside>
                                    <Image src={'/assets/logo.svg'} alt="logo" width={100} height={100} />
                                    <p className="max-w-70 text-gray-300">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                                    {/* social icons */}
                                    <div className="flex items-center gap-2 pt-2">
                                          <a href="https://www.facebook.com" target="_blank" className="p-2 rounded-full bg-slate-700 hover:bg-slate-400 hover:text-slate-900 duration-300"><FaFacebook size={16} /></a>
                                          <a href="https://www.twitter.com" target="_blank" className="p-2 rounded-full bg-slate-700 hover:bg-slate-400 hover:text-slate-900 duration-200"><FaTwitter size={16} /></a>
                                          <a href="https://www.linkedin.com" target="_blank" className="p-2 rounded-full bg-slate-700 hover:bg-slate-400 hover:text-slate-900 duration-200"><FaLinkedin size={16} /></a>
                                          <a href="https://www.instagram.com" target="_blank" className="p-2 rounded-full bg-slate-700 hover:bg-slate-400 hover:text-slate-900 duration-200"><FaInstagram size={16} /></a>
                                    </div>
                              </aside>
                              <nav>
                                    <h6 className="footer-title opacity-100">About</h6>
                                    <Link href="/" className="hover:text-orange-500 duration-300">Home</Link>
                                    <Link href="/" className="hover:text-orange-500 duration-300">Service</Link>
                                    <Link href="/" className="hover:text-orange-500 duration-300">Contact</Link>
                              </nav>
                              <nav>
                                    <h6 className="footer-title opacity-100">Company</h6>
                                    <Link href="/" className="hover:text-orange-500 duration-300">Why Car Doctor us</Link>
                                    <Link href="/" className="hover:text-orange-500 duration-300">About</Link>
                              </nav>
                              <nav>
                                    <h6 className="footer-title opacity-100">Support</h6>
                                    <Link href="/" className="hover:text-orange-500 duration-300">Support Center</Link>
                                    <Link href="/" className="hover:text-orange-500 duration-300">Feedback</Link>
                                    <Link href="/" className="hover:text-orange-500 duration-300">Accesibilty</Link>
                              </nav>
                        </div>
                  </section>
            </footer>
      )
}

export default Footer
