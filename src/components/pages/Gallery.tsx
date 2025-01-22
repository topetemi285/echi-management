import { Flex, Paper, Image } from "@mantine/core";
import React from "react";

function Gallery() {
  return (
    <section id="gallery">
      <Paper
        style={{
          padding: "2rem",
        }}
      >
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ sm: "center" }}
          wrap={"wrap"}
        >
          <Image
            radius="md"
            h={200}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
          <Image
            radius="md"
            h={200}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
          <Image
            radius="md"
            h={200}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
          <Image
            radius="md"
            h={200}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
          <Image
            radius="md"
            h={200}
            w="auto"
            fit="contain"
            src="/echibuild.jpg"
            alt="image3"
          />
          
          <Image
            radius="md"
            h={200}
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
