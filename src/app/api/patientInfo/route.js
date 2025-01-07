import mongoose from "mongoose";
import { PatientInfo } from "../models/Patients";
import { MedicalReport } from "../models/Medicals";
export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URL);

  const body = await req.json();

  const createdPatient = await PatientInfo.create(body);

  return Response.json(createdPatient);
}

export async function GET() {
  await mongoose.connect(process.env.MONGO_URL);
  const allPatient = await PatientInfo.find().populate("medicalReports").exec();
  return Response.json(allPatient);
}

// export async function PUT(req) {
//   await mongoose.connect(process.env.MONGO_URL);
//   const { _id, ...data } = await req.json();

//   const medicalReports = await MedicalReport.create(data);

//   const updatePatient = await PatientInfo.findByIdAndUpdate(
//     _id,
//     {
//       $push: { medicalReports: medicalReports._id },
//     },
//     { new: true }
//   ).populate("medicalReports");

//   if (!updatePatient) {
//     return (
//       new Response.json.toString({ error: "Patient not Found" }),
//       { status: 404 }
//     );
//   }

//   return Response.json(updatePatient, medicalReports);
// }

export async function PUT(req) {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL);

    // Parse the request body
    const { _id, ...data } = await req.json();

    // Create a new medical report
    const medicalReports = await MedicalReport.create(data);

    // Update the patient information by pushing the medical report ID
    const updatePatient = await PatientInfo.findByIdAndUpdate(
      _id,
      { $push: { medicalReports: medicalReports._id } },
      { new: true } // Return the updated document
    ).populate("medicalReports");

    if (!updatePatient) {
      return new Response(JSON.stringify({ error: "Patient not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return the updated patient information
    return new Response(
      JSON.stringify({ patient: updatePatient, medicalReports }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
