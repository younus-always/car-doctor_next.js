import BookingUpdateForm from "@/components/forms/BookingUpdateForm"

const UpdateBooking = async ({ params }) => {
      const { id } = await params;
      const res = await fetch(`http://localhost:300/api/my-booking/${id}`);
      const data = await res.json()

      return (
            <>
                  <BookingUpdateForm data={data} />
            </>
      )
}

export default UpdateBooking
