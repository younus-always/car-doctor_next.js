import BookingUpdateForm from "@/components/forms/BookingUpdateForm"
import { headers } from "next/headers";

const UpdateBooking = async ({ params }) => {
      const { id } = await params;
      const res = await fetch(`http://localhost:300/api/my-booking/${id}`, {
            headers: await headers()
      });
      const data = await res.json()

      return (
            <>
                  <BookingUpdateForm data={data} />
            </>
      )
}

export default UpdateBooking
