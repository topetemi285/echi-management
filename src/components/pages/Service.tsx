import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Title,
  Text,
  Image,
  Flex,
  Group,
  Button,
  Card,
  Badge,
} from "@mantine/core";
import { SERVICES } from "@/constants";

function ServicePage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section id="service">
      <Paper
        style={{
          // backgroundColor: "grey-900",
          paddingRight: "4rem",
          paddingLeft: "3rem",
        }}
      >
        <Flex
          mih={50}
          gap="md"
          justify="flex-center"
          align="flex-center"
          direction="column"
          wrap="wrap"
        >
          <Title
            style={{
              //   color: "#1b065d",
              fontSize: isMobile ? "2rem" : "2.5rem",
              fontWeight: "bold",
              paddingLeft: isMobile ? "5rem" : "10rem",
            }}
          >
            We Offer Different Services To Improve Your Health
          </Title>

          <div className="flex flex-col items-center justify-center gap-1">
            <div>
              <Image
                src="/icons/section-img.png"
                alt="love"
                className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18"
                fit="contain"
              />
            </div>

            <Text
              style={{
                color: "#A9A9A9",
                marginTop: "1rem",
                fontSize: "14px",
                fontWeight: isMobile ? "lighter" : "bolder",
                paddingLeft: isMobile ? "3rem" : "0.5rem",
              }}
            >
              ECHI in an effort to provoide affordable and accessible health
              care
            </Text>
          </div>
        </Flex>

        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <Text
            td="underline"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Who We Are
          </Text>

          <div className="mt-4 grid grid-row md:grid-cols-2 lg:grid-cols-2 items-start justify-center gap-10 p-2 ">
            <div>
              <p
                style={{
                  paddingLeft: isMobile ? "6rem" : "0rem",
                  paddingRight: isMobile ? "5rem" : "0rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas pharetra antege vel est lobortis, a commodo magna
                rhoncus. In quis nisi non emet quam pharetra commodo. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos.{" "}
              </p>
              <div className="mt-5 flex items-start justify-start gap-1 ">
                <ul
                  style={{
                    paddingLeft: isMobile ? "6rem" : "0rem",
                  }}
                >
                  <Text>Maecenas vitae luctus nibh.</Text>
                  <Text>Maecenas vitae luctus nibh.</Text>
                  <Text>Maecenas vitae luctus nibh.</Text>
                  <Text>Maecenas vitae luctus nibh.</Text>
                </ul>
                <ul
                  style={{
                    paddingLeft: isMobile ? "6rem" : "0rem",
                  }}
                >
                  <Text>Maecenas vitae luctus nibh.</Text>
                  <Text>Maecenas vitae luctus nibh.</Text>
                  <Text>Maecenas vitae luctus nibh.</Text>
                  <Text>Maecenas vitae luctus nibh.</Text>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <iframe
                  width="600"
                  height="300"
                  src="https://www.youtube.com/embed/74DWwSxsVSs"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <Flex
          mih={50}
          gap="md"
          direction="column"
          wrap="wrap"
          style={{
            marginTop: "3rem",
          }}
        >
          <Title
            style={{
              //   color: "#1b065d",
              fontSize: isMobile ? "2rem" : "2.5rem",
              fontWeight: "bold",
              paddingLeft: isMobile ? "5rem" : "10rem",
            }}
          >
            We Offer Different Services To Improve Your Health
          </Title>

          <div className="flex flex-col items-center justify-center gap-1">
            <div>
              <Image
                src="/icons/section-img.png"
                alt="love"
                className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18"
                fit="contain"
              />
            </div>

            <Text
              style={{
                color: "#A9A9A9",
                marginTop: "1rem",
                fontSize: "14px",
                fontWeight: isMobile ? "lighter" : "bolder",
                paddingLeft: isMobile ? "3rem" : "0.5rem",
              }}
            >
              ECHI in an effort to provoide affordable and accessible health
              care
            </Text>
          </div>

          <div className="mx-10  grid grid-cols-1 items-start justify-start gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="flex items-start justify-start gap-4"
              >
                <div className="relative">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    // width={150}
                    // height={150}
                    className="h-20 w-20"
                    fit="contain"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-4">
                  <Text
                    style={{
                      //   color: "#1b065d",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {service.title}
                  </Text>
                  <Text
                    style={{
                      color: "#A9A9A9",
                      fontSize: "14px",
                      fontWeight: "lighter",
                    }}
                  >
                    {service.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>

          <Title
            style={{
              marginTop: "1.5rem",
              //   color: "#1b065d",
              fontSize: isMobile ? "2rem" : "2.5rem",
              fontWeight: "bold",
              paddingLeft: isMobile ? "5rem" : "10rem",
            }}
          >
            Keep up with Our Most Recent Medical News
          </Title>

          <div>
            <Image
              src="/icons/section-img.png"
              alt="love"
              className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18"
              fit="contain"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src="/echiPersonel.jpg" height={160} alt="Norway" />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Norway Fjord Adventures</Text>
                <Badge color="pink">5mins ago</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Read More
              </Button>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src="/echiPersonel.jpg" height={160} alt="Norway" />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Norway Fjord Adventures</Text>
                <Badge color="pink">1 day ago</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Read More
              </Button>
            </Card>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src="/echiPersonel.jpg" height={160} alt="Norway" />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Norway Fjord Adventures</Text>
                <Badge color="pink">3mins ago</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button color="blue" fullWidth mt="md" radius="md">
                Read More
              </Button>
            </Card>
          </div>
        </Flex>
      </Paper>
    </section>
  );
}

export default ServicePage;
