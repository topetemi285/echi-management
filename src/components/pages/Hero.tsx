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
  Overlay,
} from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";

function HeroPage() {
  const autoplay = useRef(Autoplay({ delay: 8000, active: true }));
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Carousel
      withIndicators
      height={500}
      plugins={[autoplay.current]}
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.reset()}
      withControls={false}
    >
      <Carousel.Slide>
        <Paper
          style={{
            padding: "1rem",
            marginBottom: "2rem",
            position: "relative",
            backgroundImage: isMobile ? "url('Doctors.jpeg')" : "none",
            backgroundSize: "cover",
            backgroundPosition: isMobile ? "center" : "end",
            color: "#000",
          }}
        >
          {isMobile && (
            <Overlay
              opacity={1}
              color="#000"
              zIndex={1}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          )}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 2,
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
                  color: isMobile ? "white" : "#1591ea",
                  fontSize: isMobile ? "2rem" : "3rem",
                  fontWeight: "bolder",
                  marginTop: isMobile ? "120px" : "50px",
                }}
              >
                ECWA COMMUNITY HEALTH INITIATIVE
              </Title>

              <Text
                style={{
                  color: isMobile ? "white" : "black",
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: "normal",
                }}
              >
                ECHI in an effort to provoide affordable and accessible health
                care to the under priviledged communities in Nigeria and beyond,
                has collaborated with various agencies in diverse ways to reach
                out to these communities.
              </Text>

              <Button
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

            <div className="h-100 w-400 mt-24 ">
              <Image
                src="Doctors.jpeg"
                alt="doctor"
                fit="cover"
                // style={{ opacity: 1.5 }}
              />
            </div>
          </div>
        </Paper>
      </Carousel.Slide>
      <Carousel.Slide>
        {/* <Paper
          style={{
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
                  fontWeight: "normal",
                }}
              >
                We are dedicated to transforming underprivileged communities by
                ensuring access to essential healthcare and fostering
                collaborative support networks.
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
        </Paper> */}
        <Paper
          style={{
            padding: "1rem",
            marginBottom: "2rem",
            position: "relative",
            backgroundImage: isMobile ? "url('Doctors.jpeg')" : "none",
            backgroundSize: "cover",
            backgroundPosition: isMobile ? "center" : "end",
            color: "#000",
          }}
        >
          {isMobile && (
            <Overlay
              opacity={1}
              color="#000"
              zIndex={1}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          )}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 2,
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
                  color: isMobile ? "white" : "#1591ea",
                  fontSize: isMobile ? "2rem" : "3rem",
                  fontWeight: "bolder",
                  marginTop: isMobile ? "120px" : "50px",
                }}
              >
                ECWA COMMUNITY HEALTH INITIATIVE
              </Title>

              <Text
                style={{
                  color: isMobile ? "white" : "black",
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: "normal",
                }}
              >
                ECHI in an effort to provoide affordable and accessible health
                care to the under priviledged communities in Nigeria and beyond,
                has collaborated with various agencies in diverse ways to reach
                out to these communities.
              </Text>

              <Button
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

            <div className="h-100 w-400 mt-24 ">
              <Image
                src="Doctors.jpeg"
                alt="doctor"
                fit="cover"
                // style={{ opacity: 1.5 }}
              />
            </div>
          </div>
        </Paper>
      </Carousel.Slide>
      <Carousel.Slide>
        {/* <Paper
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
                DUMMY Communities
              </Title>

              <Text
                style={{
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: "normal",
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
        </Paper> */}
        <Paper
          style={{
            padding: "1rem",
            marginBottom: "2rem",
            position: "relative",
            backgroundImage: isMobile ? "url('Doctors.jpeg')" : "none",
            backgroundSize: "cover",
            backgroundPosition: isMobile ? "center" : "end",
            color: "#000",
          }}
        >
          {isMobile && (
            <Overlay
              opacity={1}
              color="#000"
              zIndex={1}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          )}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 2,
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
                  color: isMobile ? "white" : "#1591ea",
                  fontSize: isMobile ? "2rem" : "3rem",
                  fontWeight: "bolder",
                  marginTop: isMobile ? "120px" : "50px",
                }}
              >
                ECWA COMMUNITY HEALTH INITIATIVE
              </Title>

              <Text
                style={{
                  color: isMobile ? "white" : "black",
                  fontSize: isMobile ? "18px" : "20px",
                  fontWeight: "normal",
                }}
              >
                ECHI in an effort to provoide affordable and accessible health
                care to the under priviledged communities in Nigeria and beyond,
                has collaborated with various agencies in diverse ways to reach
                out to these communities.
              </Text>

              <Button
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

            <div className="h-100 w-400 mt-24 ">
              <Image
                src="Doctors.jpeg"
                alt="doctor"
                fit="cover"
                // style={{ opacity: 1.5 }}
              />
            </div>
          </div>
        </Paper>
      </Carousel.Slide>
    </Carousel>
  );
}

export default HeroPage;
