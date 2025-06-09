"use client"
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";

const DeleteBookingBtn = ({ id }) => {
      const router = useRouter()
      // delete function
      const handleDelete = async (id) => {
            const res = await fetch(`http://localhost:3000/api/service/${id}`, {
                  method: "DELTE"
            })
            const deleteData = await res.json();
            console.log("Deleted data response", deleteData)
            router.refresh()
      };

      return <>
            <button type="button" onClick={() => handleDelete(id)} className="text-red-500 cursor-pointer"><MdDeleteForever size={24} /></button>
      </>
}

export default DeleteBookingBtn
