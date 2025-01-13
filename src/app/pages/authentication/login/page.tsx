"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Group,
  PasswordInput,
  TextInput,
  Title,
  Image,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function LoginPage() {
  const router = useRouter();
  const [visible, { toggle }] = useDisclosure(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handFormSubmit(ev: { preventDefault: () => void }) {
    ev.preventDefault();
    try {
      setIsLoading(true);
      const result = await signIn("credentials", {
        email,
        password,
        // callbackUrl: "/",
        redirect: false,
      });
      if (result?.error) {
        toast.error(result.error || "Login Failed");
      } else {
        toast.success("Login Successful!");
        router.push("/pages/patients/");
      }
      setIsLoading(false);
    } catch (error) {
      toast.error("An error occurred during registration");
    }
  }
  // const form = useForm({
  //   mode: "uncontrolled",
  //   initialValues: {
  //     email: "",
  //     termsOfService: false,
  //   },

  //   validate: {
  //     email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  //   },
  // });

  return (
    <div className="mt-20 mx-auto">
      <div className="border shadow-lg mt-8 mx-auto max-w-md md:max-w-2xl lg:max-w-3xl p-10">
        <Title className="text-center">LOGIN PAGE</Title>
        <form onSubmit={handFormSubmit}>
          <TextInput
            className="mb-5"
            label="Email"
            placeholder="your@email.com"
            // key={form.key("email")}
            // {...form.getInputProps("email")}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <Group justify="flex-end">
            <Link
              className="text-gray-500 underline hover:text-blue-400 transition"
              href={""}
            >
              Forget Password?
            </Link>
          </Group>

          <PasswordInput
            label="password"
            defaultValue="secret"
            visible={visible}
            onVisibilityChange={toggle}
            onChange={(ev) => setPassword(ev.target.value)}
          />

          {/* <Checkbox
            mt="md"
            label="remember me"
            key={form.key("termsOfService")}
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          /> */}
          <div className="mt-5 mb-2">
            <button type="submit">{isLoading ? "Loading" : "Login"}</button>
          </div>

          <div className="my-4 text-center text-gray-400">
            or SignUp with provider
          </div>

          <Button
            fullWidth
            color="rgba(242, 242, 242, 1)"
            onClick={() => signIn("google", { callbackUrl: "/pages/patients" })}
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

          <div className="mt-2 flex justify-center items-center gap-2 text-center">
            <Text>Doesnt have an account?</Text>
            <Link
              className="text-gray-500 underline hover:text-blue-400 transition"
              href={"/pages/authentication/registration"}
            >
              SignUp
            </Link>
          </div>
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

export default LoginPage;
