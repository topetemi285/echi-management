/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { Title } from "@mantine/core";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";



function AllPatientPage() {
  const session = useSession();
  const [patient, setPatient] = useState([]);

  const { status } = session;
  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/patientInfo").then((res) =>
        res.json().then((patient) => {
          setPatient(patient);
        })
      );
    }
  }, [session, status]);

  console.log(session);
  if (status === "loading") {
    return "loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/");
  }
  return (
    <div className="mt-10 max-w-5xl mx-auto">
      <Title className="text-center">ALL PATIENTS RECORDS</Title>

      {patient?.length > 0 &&
        patient.map((pat:any, index) => (
          <div
            key={pat?._id}
            className="m-5 p-4 gap-4 md:grid md:grid-cols-4 md:items-start md:justify-start border"
          >
            <div>{index}</div>
            <div>{pat?.name}</div>
            <div>{pat?.email}</div>
            <div className="flex justify-center items-center gap-6">
              <div className="text-blue-500">
                <Link href={"/"}>View</Link>
              </div>
              <div className="text-green-800">
                <Link href={"/pages/patients/edit/" + pat._id}>Edit</Link>
              </div>
              <div className="text-red-600">Delete</div>
            </div>

            {/* <div>
              {pat.medicalReports.map((m) => (
                <div key={m.id}>{m.drug}</div>
              ))}
            </div> */}
          </div>
        ))}

      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 6px 8px rgba(0,0,0,0.3",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <Link href={"/pages/patients/new"} className="font-semibold text-3xl">
          +
        </Link>
      </button>
    </div>
  );
}

export default AllPatientPage;
