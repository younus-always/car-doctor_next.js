import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server"

export const middleware = async (req) => {
      console.log("From middleware ", req.nextUrl.pathname)
      const token = await getToken({ req })
      if (token) {
            return NextResponse.next()
      } else {
            return NextResponse.redirect(new URL('/login', req.URL))
      }

};
export const config = {
      matcher: [
            '/my-booking',
            '/my-booking/:path*',
            '/checkout/:path*'
      ]
}