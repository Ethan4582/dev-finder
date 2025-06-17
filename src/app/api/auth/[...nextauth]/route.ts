


import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

// export const authOptions = {
//   adapter: DrizzleAdapter(db) as Adapter,
//     providers: [
//     GoogleProvider({
//   clientId: process.env.GOOGLE_CLIENT_ID!,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// }),
//     // ...add more providers here
//   ],
// }

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }