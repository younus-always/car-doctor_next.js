// "use client"
import MyBookingsTable from "@/components/tables/MyBookingsTable"
import { headers } from "next/headers"

const fetchBookings = async () => {
      const res = await fetch("http://localhost:3000/api/service", {
            headers: headers
      })
      let result = await res.json()
      // ToDo:: debug the result
      return result = []

}

const MyBookings = async () => {
      const data = await fetchBookings()
      // const [data, setData] = useState([]);
      // useEffect(() => {
      // fetchBookings()
      // }, []);
      console.log(data)

      return (
            <div>
                  <h1 className="text-3xl lg:text-4xl font-semibold py-6 text-center">My Bookings Page</h1>
                  <MyBookingsTable data={data} />
            </div>
      )
}

export default MyBookings
