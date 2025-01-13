"use client";
import React from "react";
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

interface PatientFormProps {
  isloading?: boolean;
  onSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    data: PatientData
  ) => void;
  patient?: PatientData | null;
}

const PatientForm: React.FC<PatientFormProps> = ({ onSubmit, patient, isloading }) => {
  const [name, setName] = useState(patient?.name || "");
  const [email, setEmail] = useState(patient?.email || "");
  const [date, setDate] = useState(patient?.date || "");
  const [phone, setPhone] = useState(patient?.phone || "");
  const [address, setAddress] = useState(patient?.address || "");
  const [gender, setGender] = useState(patient?.gender || "");
  const [emergenceContact, setEmergenceContact] = useState(
    patient?.emergenceContact || ""
  );
  return (
    <form
      className="p-10 grow text-start"
      onSubmit={(ev) =>
        onSubmit(ev, {
          name,
          email,
          date,
          phone,
          address,
          gender,
          emergenceContact,
        })
      }
    >
      <div>
        <label>Patient Name: </label>
        <input
          type="text"
          placeholder="Asalu Temitope Peter"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
      </div>
      <div className="md: grid md:grid-cols-2 md:items-start md:justify-between md:gap-5">
        <div>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="user@gmail.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Phone Number: </label>
          <input
            type="tel"
            placeholder="08138303733"
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
          />
        </div>
      </div>
      <div className="md: grid md:grid-cols-2 md:items-center md:justify-between md:gap-5">
        <div>
          <label htmlFor="">Date Of Birth: </label>
          <input
            className="text-black"
            type="date"
            value={date}
            onChange={(ev) => setDate(ev.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Gender: </label>
          <div className="flex items-center justify-between">
            <label htmlFor="">
              <input
                type="radio"
                value="male"
                checked={gender == "male"}
                onChange={(ev) => setGender(ev.target.value)}
              />
              Male
            </label>
            <label htmlFor="">
              <input
                type="radio"
                value="female"
                checked={gender == "female"}
                onChange={(ev) => setGender(ev.target.value)}
              />
              Female
            </label>
            <label htmlFor="">
              <input
                type="radio"
                value="other"
                checked={gender == "other"}
                onChange={(ev) => setGender(ev.target.value)}
              />
              Other
            </label>
          </div>
        </div>
      </div>

      <div className="md: grid md:grid-cols-2 md:items-start md:justify-between md:gap-5">
        <div>
          <label htmlFor="">Home Address: </label>
          <input
            type="text"
            placeholder="N0. Noad 1 ECWA hqtrs"
            value={address}
            onChange={(ev) => setAddress(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Emergence Contact: </label>
          <input
            type="tel"
            placeholder="08138303733"
            value={emergenceContact}
            onChange={(ev) => setEmergenceContact(ev.target.value)}
          />
        </div>
      </div>

      <button type="submit">{isloading ? "Loading" :"Save"}</button>
    </form>
  );
};

export default PatientForm;
