
const MyBookingsTable = () => {
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
                              <tr className="border">
                                    <td>Image</td>
                                    <td>name</td>
                                    <td>date</td>
                                    <td>price</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      )
}

export default MyBookingsTable
