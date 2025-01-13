"use client";
import { Title } from "@mantine/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatientForm from "@/components/layout/PatientForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);
  const { status } = session;

  async function handlePatientInfo(
    ev: React.FormEvent<HTMLFormElement>,
    data: PatientData // Change the type to `PatientData`
  ) {
    ev.preventDefault();
    try {
      setIsLoading(true);
      if (status === "authenticated") {
        const res = await fetch("/api/patientInfo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          toast.success("Patient Info Saved!");
        } else {
          toast.error("Failed to Save PatienT Info");
        }

        setIsLoading(false);
      }

      if (status === "loading") {
        return "LOADING";
      }

      if (status === "unauthenticated") {
        return redirect("/");
      }
    } catch (error) {
      toast.error("An error occurred during registration a patient");
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="text-center">
        <Title>PATIENT PERSONAL INFORMATION</Title>

        <div>
          <PatientForm
            onSubmit={handlePatientInfo}
            patient={null}
            isloading={isLoading}
          />
        </div>
        <ToastContainer
          autoClose={3000}
          position="top-center"
          closeOnClick={true}
          hideProgressBar={false}
          newestOnTop={true}
          theme="colored"
        />
      </div>
    </div>
  );
}
export default NewPatient;
