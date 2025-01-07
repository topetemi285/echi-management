import { model, models, Schema } from "mongoose";

const MedicalSchema = new Schema(
  {
    doctorName: { type: String },
    email: { type: String },
    report: { type: String },
    drug: { type: String },
    result: { type: String },
    labTechName: { type: String },
  },
  {
    timestamps: true,
  }
);

export const MedicalReport =
  models?.MedicalReport || model("MedicalReport", MedicalSchema);
