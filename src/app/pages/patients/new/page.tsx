"use client";
import { Title } from "@mantine/core";
import { resolve } from "path";
import { toast } from "react-hot-toast";
import PatientForm from "@/components/layout/PatientForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface PatientData {
  name?: string;
  email?: string;
  date?: string;
  phone?: string;
  address?: string;
  gender?: string;
  emergenceContact?: string;
}
function NewPatient() {
  const session = useSession();

  const { status } = session;

  async function handlePatientInfo(
    ev: React.FormEvent<HTMLFormElement>,
    data: PatientData // Change the type to `PatientData`
  ) {
    ev.preventDefault();

    if (status === "authenticated") {
      const patientToast = new Promise(async (reslove, reject) => {
        const res = await fetch("/api/patientInfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.ok) resolve();
        else reject();
      });

      await toast.promise(patientToast, {
        loading: "Loading",
        success: "Patient Information Saved!",
        error: "Oooop!, an error occur",
      });
    }

    if (status === "loading") {
      return "LOADING";
    }

    if (status === "unauthenticated") {
      return redirect("/");
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="text-center">
        <Title>PATIENT PERSONAL INFORMATION</Title>

        <div>
          <PatientForm onSubmit={handlePatientInfo} patient={null} />
        </div>
      </div>
    </div>
  );
}
export default NewPatient;
