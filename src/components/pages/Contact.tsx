import {
  Button,
  Group,
  Paper,
  Textarea,
  TextInput,
  Title,
  Image,
  Space,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import React from "react";

function ContactPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <section id="contact">
      <Paper
        style={{
          paddingRight: "1rem",
          paddingLeft: "1rem",
        }}
      >
        <Title
          style={{
            marginTop: "1.5rem",
            //   color: "#1b065d",
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: "bold",
            paddingLeft: isMobile ? "1rem" : "2rem",
            textAlign: isMobile ? "start" : "center",
          }}
        >
          We Are Always Ready to Help You.
        </Title>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <form
            style={{ marginTop: "2rem" }}
            onSubmit={form.onSubmit((values) => console.log(values))}
          >
            <TextInput
              size="lg"
              label="Name"
              placeholder="Name"
              key={form.key("name")}
              {...form.getInputProps("name")}
            />
            <Space h="lg" />
            <TextInput
              size="lg"
              label="Email"
              placeholder="your@email.com"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
            <Space h="kg" />
            <Textarea
              size="xl"
              label="Comment"
              withAsterisk
              // description="Input description"
              placeholder="Write your message here..."
              key={form.key("comment")}
              {...form.getInputProps("comment")}
            />
            <Space h="lg" />
            <Group justify="flex-end" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>

          <div className="h-100 w-400">
            <Image src="/Doctors.jpeg" alt="doctor" fit="cover" />
          </div>
        </div>
      </Paper>
    </section>
  );
}

export default ContactPage;
