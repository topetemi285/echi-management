import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import client from "../../../../components/libs/mongoConnect";
import mongoose from "mongoose";
import { User } from "../../models/User";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!mongoose.connection.readyState) {
          await mongoose.connect(process.env.MONGO_URL);
        }

        const user = await User.findOne({ email });

        if (user && bcrypt.compareSync(password, user.password)) {
          return user;
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
