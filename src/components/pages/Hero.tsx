"use client";
// import { IconPlayCard } from "@tabler/icons-react";
import React, { useRef } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";

import {
  Button,
  // Container,
  Paper,
  Stack,
  Title,
  Text,
  Image,
} from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";

function HeroPage() {
  const autoplay = useRef(Autoplay({ delay: 2000, active: true }));
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Carousel
      withIndicators
      height={500}
      plugins={[autoplay.current]}
      onMouseEnter={() => autoplay.current.stop()} // Correct event handling
      onMouseLeave={() => autoplay.current.reset()}
      // controlSize={"0"}
      // nextControlIcon={
      //   <IconArrowRight style={{ width: rem(16), height: rem(16) }} />
      // }
      // previousControlIcon={
      //   <IconArrowLeft style={{ width: rem(16), height: rem(16) }} />
      // }
      withControls={false}
      // styles={{
      //   root: { overflow: "hidden" },
      //   viewport: {
      //     display: "flex",
      //     width: "100%",
      //     overflow: "hidden",
      //   },
      //   container: {
      //     display: "flex",
      //     flexWrap: "nowrap",
      //   },
      // }}
      // className="relative"
    >
      <Carousel.Slide>
        <Paper
          style={{
            // paddingRight: "4rem",
            // paddingLeft: "3rem",
            padding: "1rem",
            marginBottom: "3rem",
            backgroundImage: isMobile ? "url('Doctors.jpeg')" : "none",
            backgroundSize: "cover",
            backgroundPosition: "end",
            color: "#000",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              gap: isMobile ? "1" : "4",
            }}
          >
            <Stack
              style={{
                marginTop: isMobile ? "0.5rem" : "3rem",
                alignContent: "center",
                maxWidth: isMobile ? "100%" : "50%",
                // textAlign: isMobile ? "center" : "left",
              }}
            >
              <Title
                order={2}
                style={{
                  color: "#1591ea",
                  fontSize: isMobile ? "2rem" : "3rem",
                  fontWeight: "bolder",
                  marginTop: "100px",
                }}
              >
                ECWA COMMUNITY HEALTH INITIATIVE
              </Title>

              <Text
                style={{
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: "bold",
                }}
              >
                ECHI in an effort to provoide affordable and accessible health
                care to the under priviledged communities in Nigeria and beyond,
                has collaborated with various agencies in diverse ways to reach
                out to these communities.
              </Text>

              <Button
                // rightSection={
                //   <IconPlayCard size="2rem" stroke={1.5} color="#ffff" />
                // }
                style={{
                  backgroundColor: "#1591ea",
                  color: "#fff",
                  borderRadius: "8px",
                  // padding: "10px px",
                  fontWeight: "bold",
                  fontSize: isMobile ? "0.9rem" : "1rem",
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
                More Info
              </Button>
            </Stack>

            <div className="h-100 w-400 mt-24">
              <Image src="Doctors.jpeg" alt="doctor" fit="cover" />
            </div>
          </div>
        </Paper>
      </Carousel.Slide>
      <Carousel.Slide>
        <Paper
          style={{
            // paddingRight: "4rem",
            // paddingLeft: "3rem",
            padding: "1rem",
            marginBottom: "3rem",
            backgroundImage: isMobile ? "url('Doctors.jpeg')" : "none",
            backgroundSize: "cover",
            backgroundPosition: "end",
            color: "#000",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              gap: isMobile ? "1" : "4",
            }}
          >
            <Stack
              style={{
                marginTop: "3rem",
                alignContent: isMobile ? "center" : "center",
                maxWidth: isMobile ? "100%" : "50%",
                // textAlign: isMobile ? "center" : "left",
              }}
            >
              <Title
                order={2}
                style={{
                  color: "#1591ea",
                  fontSize: isMobile ? "2rem" : "3rem",
                  fontWeight: "bolder",
                  marginTop: "100px",
                }}
              >
                Empowering Communities
              </Title>

              <Text
                style={{
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: "bold",
                }}
              >
                We are dedicated to transforming underprivileged communities by
                ensuring access to essential healthcare and fostering
                collaborative support networks. Our mission is to bridge
                healthcare gaps by delivering impactful, sustainable solutions
                that improve quality of life.
              </Text>

              <Button
                // rightSection={
                //   <IconPlayCard size="2rem" stroke={1.5} color="#ffff" />
                // }
                style={{
                  backgroundColor: "#1591ea",
                  color: "#fff",
                  borderRadius: "8px",
                  // padding: "10px px",
                  fontWeight: "bold",
                  fontSize: isMobile ? "0.9rem" : "1rem",
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
                More Info
              </Button>
            </Stack>

            <div className="h-100 w-400 mt-24">
              <Image src="Doctors.jpeg" alt="doctor" fit="cover" />
            </div>
          </div>
        </Paper>

        {/* <Paper style={{ padding: "2rem", textAlign: "center" }}>
            <Title
              order={2}
              style={{
                fontSize: isMobile ? "2rem" : "2.5rem",
                color: "#1591ea",
                marginBottom: "1rem",
              }}
            >
              
            </Title>
            <Text
              style={{
                fontSize: isMobile ? "16px" : "18px",
                lineHeight: "1.5",
                color: "#555",
              }}
            >
             
            </Text>
            <Button
              style={{
                backgroundColor: "#1591ea",
                color: "#fff",
                borderRadius: "8px",
                marginTop: "1rem",
              }}
            >
              Learn More
            </Button>
          </Paper> */}
      </Carousel.Slide>
    </Carousel>
  );
}

export default HeroPage;
