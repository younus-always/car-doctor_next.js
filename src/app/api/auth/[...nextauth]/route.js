import { loginUser } from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
      // Configure one or more authentication providers
      providers: [
            CredentialsProvider({
                  // The name to display on the sign in form (e.g. "Sign in with...")
                  name: "Credentials",
                  // `credentials` is used to generate a form on the sign in page.
                  // You can specify which fields should be submitted, by adding keys to the `credentials` object.
                  // e.g. domain, username, password, 2FA token, etc.
                  // You can pass any HTML attribute to the <input> tag through the object.
                  credentials: {
                        email: { label: "email", type: "email", placeholder: "Enter your email" },
                        password: { label: "Password", type: "password" }
                  },
                  async authorize(credentials, req) {
                        console.log(credentials)
                        // Add logic here to look up the user from the credentials supplied
                        const user = loginUser(credentials);
                        console.log(user)

                        if (user) {
                              // Any object returned will be saved in `user` property of the JWT
                              return user
                        } else {
                              // If you return null then an error will be displayed advising the user to check their details.
                              return null

                              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                        }
                  }
            }),
            GoogleProvider({
                  clientId: process.env.GOOGLE_CLIENT_ID,
                  clientSecret: process.env.GOOGLE_CLIENT_SECRET
            }),
            GitHubProvider({
                  clientId: process.env.GITHUB_ID,
                  clientSecret: process.env.GITHUB_SECRET
            })
      ],
      pages: {
            signIn: "/login"
      }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }