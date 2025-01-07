"use client";
"use client";
import React from "react";
import { useState } from "react";

interface PatientData {
  doctorName?: string;
  email?: string;
  report?: string;
  drug?: string;
  result?: string;
  labTechName?: string;
}

interface MedicalFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>, data: PatientData) => void;
  patient?: PatientData | null;
}

const MedicalForm: React.FC<MedicalFormProps> = ({ onSubmit, patient }) => {
  const [doctorName, setDoctorName] = useState(patient?.doctorName || "");
  const [email, setEmail] = useState(patient?.email || "");
  const [report, setReport] = useState(patient?.report || "");
  const [drug, setDrug] = useState(patient?.drug || "");
  const [result, setResult] = useState(patient?.result || "");
  const [labTechName, setLabTechName] = useState(patient?.labTechName || "");
  //   const [emergenceContact, setEmergenceContact] = useState(
  //     patient?.emergenceContact || ""
  //   );
  return (
    <form
      className="p-10 grow text-start"
      onSubmit={(ev) =>
        onSubmit(ev, {
          doctorName,
          email,
          report,
          drug,
          result,
          labTechName,
          //   emergenceContact,
        })
      }
    >
      <div>
        <label>Doctor Name: </label>
        <input
          type="text"
          placeholder="Asalu Temitope Peter"
          value={doctorName}
          onChange={(ev) => setDoctorName(ev.target.value)}
        />
      </div>
      {/* <div className="md: grid md:grid-cols-2 md:items-start md:justify-between md:gap-5"> */}
      <div>
        <label htmlFor="">Patients Email: </label>
        <input
          type="email"
          placeholder="user@gmail.com"
          value={patient?.email || email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
      </div>

      {/* </div> */}

      <div>
        <label htmlFor="">Doctors Report: </label>
        <textarea
          placeholder="Enter your comment"
          value={report}
          onChange={(ev) => setReport(ev.target.value)}
          rows={4}
          className="border rounded p-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="">Drugs Prescription: </label>
        <textarea
          placeholder="Drug Prescription: "
          value={drug}
          onChange={(ev) => setDrug(ev.target.value)}
          rows={4}
          className="border rounded p-2 w-full"
        />
      </div>

      <hr className="custom-hr" />

      <div>
        <label>Lab Technician Name: </label>
        <input
          type="text"
          placeholder="Asalu Temitope Peter"
          value={labTechName}
          onChange={(ev) => setLabTechName(ev.target.value)}
        />
      </div>

      <div>
        <label htmlFor="">Summary of Test Result</label>
        <textarea
          placeholder="summary of result"
          value={result}
          onChange={(ev) => setResult(ev.target.value)}
          rows={6}
          className="border rounded p-2 w-full"
        />
      </div>

      <hr className="custom-hr" />

      <button type="submit">Save</button>
    </form>
  );
}

export default MedicalForm;
