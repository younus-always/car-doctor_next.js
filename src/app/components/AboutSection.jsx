import Image from "next/image"

const AboutSection = () => {
      return (
            <section className="max-w-7xl mx-auto py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative">
                              <figure>
                                    <Image src="/assets/images/about_us/person.jpg" alt="person image" width={500} height={333} className="rounded-lg" />
                              </figure>
                              <figure className="absolute bottom-0 right-0 bg-white p-2 rounded-lg">
                                    <Image src="/assets/images/about_us/parts.jpg" alt="parts image" width={327} height={218} />
                              </figure>
                        </div>
                        <div className="max-w-md space-y-4">
                              <h5 className="text-orange-600 font-bold">About Us</h5>
                              <h3 className="max-w-sm text-5xl font-bold leading-14">
                                    We are qualified & of experience in this field
                              </h3>
                              <p className="leading-7 text-gray-600">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                              </p>
                              <p className="leading-7 text-gray-600">
                                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                              </p>
                              <button type="button" className="py-3 px-4 rounded-md bg-orange-600 text-slate-50 font-semibold hover:bg-orange-500 duration-300 shadow cursor-pointer active:scale-95">Get More Info</button>
                        </div>
                  </div>
            </section>
      )
}

export default AboutSection
