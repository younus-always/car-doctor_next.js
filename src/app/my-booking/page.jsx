"use client"
import MyBookingsTable from "@/components/tables/MyBookingsTable"
import { useEffect, useState } from "react"

const MyBookings = () => {
      const [data, setData] = useState([]);

      useEffect(() => {
            const fetchBookings = async () => {
                  const res = await fetch("http://localhost:3000/api/service")
                  const result = await res.json()
                  setData(result)
            }
            fetchBookings()
      }, []);


      return (
            <div>
                  <h1 className="text-3xl lg:text-4xl font-semibold py-6 text-center">My Bookings Page</h1>
                  <MyBookingsTable data={data} />
            </div>
      )
}

export default MyBookings
