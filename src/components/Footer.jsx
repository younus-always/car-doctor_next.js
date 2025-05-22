import Image from "next/image"
import Link from "next/link"

const Footer = () => {
      return (
            <footer className="bg-slate-900 ">
                  <section className="max-w-7xl mx-auto">
                        <div className="footer sm:footer-horizontal py-10 text-slate-100">
                              <aside>
                                    {/* <img src="" alt="" /> */}
                                    <Image src={'./assets/logo.svg'} alt="logo" width={120} height={120} />
                                    <p className="max-w-72 text-lg text-gray-400">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                                    {/* social icons */}
                                    <div>

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
