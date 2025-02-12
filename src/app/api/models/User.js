import bcrypt from "bcrypt";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 8) {
          new Error("Password must be at least 5 characters");
          return false;
        }
      },
    },
  },
  { timestamps: true }
);

UserSchema.post("validate", function (user) {
  if (user.isModified("password")) {
    const notHashedPassword = user.password;

    if (typeof notHashedPassword !== "string") {
      throw new Error("Password must be a string");
    }

    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);
  }
});
export const User = models?.User || model("User", UserSchema);
