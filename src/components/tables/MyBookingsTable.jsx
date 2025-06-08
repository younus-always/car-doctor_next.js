import { MdDeleteForever } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import Image from "next/image";

const MyBookingsTable = ({ data }) => {
      console.log(data)

      return (
            <div className="max-w-7xl mx-auto my-10">
                  <table className="w-full table table-zebra">
                        <thead className="border">
                              <tr>
                                    <th>Service Image</th>
                                    <th>Service Name</th>
                                    <th>Service Date</th>
                                    <th>Service Price</th>
                                    <th></th>
                                    <th></th>
                              </tr>
                        </thead>
                        <tbody>
                              {data?.map(item =>
                                    <tr key={item._id} className="border">
                                          <td>
                                                <Image src={item.service_img}
                                                      alt={item.service_name} height={50} width={50} />
                                          </td>
                                          <td>{item.service_name}</td>
                                          <td>{item.date}</td>
                                          <td>{item.service_price}</td>
                                          <td>
                                                <button type="button" className="text-yellow-500 cursor-pointer"><FaPenToSquare size={24} /></button>
                                          </td>
                                          <td>
                                                <button type="button" className="text-red-500 cursor-pointer"><MdDeleteForever size={24} /></button>
                                          </td>
                                    </tr>)}
                        </tbody>
                  </table>
            </div>
      )
}

export default MyBookingsTable
