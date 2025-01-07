import { model, models, Schema } from "mongoose";
// import { MedicalReport } from "../models/Medicals";

const PatientSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    date: { type: String },
    phone: { type: String },
    address: { type: String },
    gender: { type: String },
    emergenceContact: { type: String },
    medicalReports: [
      {
        type: Schema.Types.ObjectId,
        ref: "MedicalReport",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const PatientInfo =
  models?.PatientInfo || model("PatientInfo", PatientSchema);
