"use client";
import {
  Box,
  Container,
  Group,
  Paper,
  Burger,
  Button,
  //   Menu,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useState } from "react";
// import { IconChevronDown } from "@tabler/icons-react";
import NavLinkss from "./NavLink";
import Image from "next/image";
import Link from "next/link";

function NavBar() {
  const [opened, setOpened] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Paper
      // shadow="xs"
      //   p="xl"
      style={{
        padding: "5px",
        backgroundColor: "#FFFF",
        position: "fixed",
        width: "100%",
        zIndex: "1000",
      }}
    >
      <Container fluid style={{ padding: 1 }}>
        <Group
          justify="space-between"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            gap: isMobile ? "1rem" : "3rem",
            paddingLeft: isMobile ? "1rem" : "2rem",
          }}
        >
          <Box
            style={{
              fontSize: isMobile ? "2rem" : "3rem",
              fontWeight: "bold",
              color: "#343a40",
            }}
          >
            <Image
              src="/ecwaLogo.jpg"
              height={isMobile ? 100 : 200}
              width={isMobile ? 100 : 200}
              alt="echi"
              //fit="contain"
              style={{ paddingRight: isMobile ? "10px" : "100px" }}
            />
          </Box>

          {isMobile ? (
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              lineSize={4}
              color="#343a40"
              className="pt-5 pr-28 mr-10"
            />
          ) : (
            <Group
              style={{
                display: "flex",
                gap: "6rem",
              }}
            >
              <NavLinkss isMobile={isMobile} />

              <Link href={"/pages/authentication/login"}>
                <Button
                  style={{
                    backgroundColor: "#1591ea",
                    color: "#fff",
                    borderRadius: "12px",
                    border: "2px solid #FCEED5",
                    // padding: "8px 16px",
                    marginBottom: isMobile ? "1rem" : "0",
                    marginRight: isMobile ? "0" : "2rem",
                    width: isMobile ? "50%" : "auto",
                    transition: "background-color 0.3s, transform 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#d1d1d1";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#1591ea";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  Admin
                </Button>
              </Link>
            </Group>
          )}
        </Group>

        {isMobile && opened && (
          <div
            className="justify-start items-start"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            <NavLinkss isMobile={isMobile} />
            <Link href={"/pages/authentication/login"}>
              <Button
                style={{
                  backgroundColor: "#1591ea",
                  color: "#fff",
                  borderRadius: "12px",
                  border: "2px solid #FCEED5",
                  marginBottom: isMobile ? "1rem" : "0",
                  width: isMobile ? "100%" : "auto",
                  transition: "background-color 0.3s, transform 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#d1d1d1";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#1591ea";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Admin
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </Paper>
  );
}

export default NavBar;
