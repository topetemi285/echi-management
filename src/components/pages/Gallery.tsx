import { Flex, Paper, Image, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

function Gallery() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section id="gallery">
      <Paper
        style={{
          padding: "2rem",
        }}
      >
        <Title
          style={{
            marginTop: "1.5rem",
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: "bold",
            paddingLeft: isMobile ? "1rem" : "2rem",
            textAlign: isMobile ? "start" : "center",
          }}
        >
          They say picture speaks louder than words, have a look through our
          Gallery
        </Title>
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ sm: "start" }}
          wrap={"wrap"}
          style={{ paddingLeft: isMobile ? "1rem" : "8rem" }}
        >
          <Image
            radius="md"
            h={300}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
          <Image
            radius="md"
            h={300}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
          <Image
            radius="md"
            h={300}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
          <Image
            radius="md"
            h={300}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
          <Image
            radius="md"
            h={300}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
          <Image
            radius="md"
            h={300}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />

          <Image
            radius="md"
            h={300}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
          <Image
            radius="md"
            h={300}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
        </Flex>
      </Paper>
    </section>
  );
}

export default Gallery;
