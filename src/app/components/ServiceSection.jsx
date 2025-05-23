import Image from "next/image"
import SectionHeader from "./SectionHeader"

const ServiceSection = async () => {

      const data = [
            {

                  "service_id": "04",
                  "title": "Engine Oil Change",
                  "img": "https://i.ibb.co/T2cpBd5/888.jpg",
                  "price": "20.00",
                  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
                  "facility": [
                        {
                              "name": "Instant Car Services",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "24/7 Quality Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Easy Customer Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Quality Cost Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        }
                  ]
            },
            {

                  "service_id": "05",
                  "title": "Battery Charge",
                  "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
                  "price": "20.00",
                  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
                  "facility": [
                        {
                              "name": "Instant Car Services",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "24/7 Quality Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Easy Customer Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Quality Cost Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        }
                  ]
            },
            {

                  "service_id": "01",
                  "title": "Full car Repair",
                  "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
                  "price": "200.00",
                  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
                  "facility": [
                        {
                              "name": "Instant Car Services",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "24/7 Quality Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Easy Customer Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Quality Cost Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        }
                  ]
            },
            {

                  "service_id": "02",
                  "title": "Engine Repair",
                  "img": "https://i.ibb.co/5MvmD2g/88.jpg",
                  "price": "150.00",
                  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
                  "facility": [
                        {
                              "name": "Instant Car Services",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "24/7 Quality Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Easy Customer Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Quality Cost Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        }
                  ]
            },
            {

                  "service_id": "03",
                  "title": "Automatic Services",
                  "img": "https://i.ibb.co/wh7t3N3/555.jpg",
                  "price": "30.00",
                  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
                  "facility": [
                        {
                              "name": "Instant Car Services",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "24/7 Quality Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Easy Customer Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Quality Cost Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        }
                  ]
            },
            {

                  "service_id": "06",
                  "title": "Electrical System",
                  "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
                  "price": "20.00",
                  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
                  "facility": [
                        {
                              "name": "Instant Car Services",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "24/7 Quality Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Easy Customer Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        },
                        {
                              "name": "Quality Cost Service",
                              "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                        }
                  ]
            }
      ]


      return (
            <section className="max-w-7xl mx-auto py-8">
                  <SectionHeader title={'Our Service Area'} subTitle={'Service'} />
                  <div className="grid grid-col-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4 ">
                        {
                              data.map(service =>
                                    <div key={service._id} className="rounded-lg p-4 border-2 border-gray-200">
                                          <Image src={service.img} alt="service photo" width={314} height={208} className="rounded-lg object-cover" />
                                          <h3 className="text-xl font-bold my-2">{service.title}</h3>
                                          <div className="flex items-center justify-between">
                                                <p className="font-semibold text-orange-500">Price: ${service.price}</p>
                                                <span>icon</span>
                                          </div>
                                    </div>)
                        }
                  </div>
            </section>
      )
}

export default ServiceSection
