"use client";
import React, { useState } from "react";
import {
  Button,
  PasswordInput,
  TextInput,
  Title,
  Image,
  Text,
} from "@mantine/core";
// import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function RegistrationPage() {
  const [visible, { toggle }] = useDisclosure(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (ev: { preventDefault: () => void }) => {
    ev.preventDefault();

    // try {
    const res = await fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      toast.success("Registration Successfully");
    } else {
      toast.error("Registration Failed");
    }
    //}
    // catch (error) {
    //   toast.error("An error occurred during registration");
    // }
  };

  return (
    <div className="mt-20 mx-auto">
      <div className="border shadow-lg mt-8 mx-auto max-w-md md:max-w-2xl lg:max-w-3xl p-10">
        <Title className="text-center">SIGNUP</Title>
        <form onSubmit={handleSubmit}>
          <TextInput
            className="mb-5"
            label="Email"
            placeholder="your@email.com"
            onChange={(ev) => setEmail(ev.target.value)}
          />

          <PasswordInput
            label="password"
            defaultValue="secret"
            visible={visible}
            onVisibilityChange={toggle}
            onChange={(ev) => setPassword(ev.target.value)}
          />

          <div className="mt-2 flex justify-end items-end gap-1">
            <Text>Already have an account?</Text>
            <Link
              className="text-gray-500 underline hover:text-blue-400 transition"
              href={"/pages/authentication/login"}
            >
              SignIn
            </Link>
          </div>

          <div className="mt-3 mb-5">
            <button type="submit">SignUp</button>
          </div>

          <div className="my-4 text-center text-gray-400">
            or SignUp with provider
          </div>

          <Button
            fullWidth
            color="rgba(242, 242, 242, 1)"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <div className="flex items-center justify-center gap-4">
              <Image
                radius="md"
                h={30}
                w="auto"
                fit="contain"
                src="/icons/google.webp"
                alt="google"
              />
              <Text c={"black"}>Login with google</Text>
            </div>
          </Button>

          {/* <div className="my-4 text-center text-gray-500 mt-4">
            Existing Account?{" "}
            <Link href={"/login"} className="underline font-bold">
              Login Here &raquo;
            </Link>
          </div> */}
        </form>
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
  );
}

export default RegistrationPage;
