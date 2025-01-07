/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";
import { Title } from "@mantine/core";
import { useParams } from "next/navigation";
import Link from "next/link";
import MedicalForm from "@/components/layout/MedicalForm";

interface PatientData {
  _id?: string;
  name?: string;
  email?: string;
  report?: string;
  drug?: string;
  result?: string;
  labTechName?: string;
}
function EditPatientPage() {
  const { id } = useParams();

  const patientId = Array.isArray(id) ? id[0] : id;

  const [patientInformation, setPatientInformation] =
    useState<PatientData | null>(null);

  useEffect(() => {
    if (!patientId) return;
    fetch("/api/patientInfo").then((res) =>
      res.json().then((patients) => {
        const patient = patients.find(
          (i: { _id: string}) => i._id === patientId
        );
        setPatientInformation(patient || null);
      })
    );
  }, [patientId]);

  async function handleFormSubmit(
    ev: React.FormEvent<HTMLFormElement>,
    data: PatientData
  ) {
    ev.preventDefault();

    data = { ...data, _id: patientId};

    const res = await fetch("/api/patientInfo", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return console.log("[SUCCESSFUL]");
    } else {
      console.log("[ERROR");
    }
  }

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <div className="text-center">
        <Title>Medical Report</Title>
        <div>
          <Link href={"/pages/patients"} className="button flex">
            <span>Show All Patients</span>
          </Link>

          <MedicalForm
            onSubmit={handleFormSubmit}
            patient={patientInformation}
          />
        </div>
      </div>
    </div>
  );
}

export default EditPatientPage;
