/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";
import { Title } from "@mantine/core";
import { useParams } from "next/navigation";
import Link from "next/link";
import MedicalForm from "@/components/layout/MedicalForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const patientId = Array.isArray(id) ? id[0] : id;

  const [patientInformation, setPatientInformation] =
    useState<PatientData | null>(null);

  useEffect(() => {
    if (!patientId) return;
    fetch("/api/patientInfo").then((res) =>
      res.json().then((patients) => {
        const patient = patients.find(
          (i: { _id: string }) => i._id === patientId
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
    try {
      data = { ...data, _id: patientId };
      setIsLoading(true);
      const res = await fetch("/api/patientInfo", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        toast.success("Medical Report Successfully Saved");
      } else {
        toast.error("Medical Report Failed to save");
      }
      setIsLoading(false);
    } catch (error) {
      toast.error("An error occurred during saving medical report");
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
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default EditPatientPage;
