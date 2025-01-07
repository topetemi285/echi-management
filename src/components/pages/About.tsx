"use client";
import { Card, Paper, Text, Title, SimpleGrid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { ABOUTDETAILS, FEATURES } from "@/constants";
import CountUp from "react-countup";
// import { IconHome } from "@tabler/icons-react";
// import {
//   IconMap,
//   IconBuilding,
//   IconGlobe,
//   IconPin,
//   IconCity,
// } from "@tabler/icons-react";

function AboutPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section id="about">
      <Paper shadow="xs" p="xl">
        <SimpleGrid cols={isMobile ? 1 : 3}>
          {FEATURES.map((feature) => (
            <Card
              key={feature.id}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{
                transition: "transform 0.2s ease, boxShadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0, 0, 0, 0.3)"; // Enhanced shadow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0, 0, 0, 0.1)"; // Back to default shadow
              }}
            >
              <div className="mb-4">
                <Title>{feature.title}</Title>
              </div>

              <Text
                style={{
                  fontSize: isMobile ? "16px" : "18px",
                  fontWeight: "normal",
                }}
              >
                {feature.text}
              </Text>
            </Card>
          ))}
        </SimpleGrid>

        <div className="bg-blue-500">
          <div
            className="relative max-w-full my-10 py-28"
            style={{
              position: "relative",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/fun-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.25,
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                mixBlendMode: "multiply",
                zIndex: 0,
              }}
            ></div>

            <div className="px-10 relative z-10 flex flex-wrap justify-center items-center md:justify-center gap-28 text-white">
              {ABOUTDETAILS.map((about) => (
                <div
                  key={about.id}
                  className="flex items-center justify-center gap-2"
                >
                  <div className="border-solid border-2 border-white py-5 px-5 rounded-full hover:filter hover:brightness-0 hover:invert flex items-center justify-center">
                    {about.icon} {/* Render the icon */}
                  </div>

                  <div>
                    <div className="text-lg font-extrabold md:text-base lg:text-4xl">
                      <CountUp start={0} end={about.numbers} duration={30} />
                    </div>
                    <div className="text-lg md:text-lg lg:text-xl font-bold">
                      {about.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Paper>
    </section>
  );
}

export default AboutPage;
