import mongoose from "mongoose";
import { User } from "../models/User";

export async function POST(req) {
  const user = await req.json();
  await mongoose.connect(process.env.MONGO_URL);

  const createdUser = await User.create(user);

  return Response.json(createdUser);
}
