// import {
//   Button,
//   Group,
//   Paper,
//   Textarea,
//   TextInput,
//   Title,
//   Image,
//   Space,
//   Box,
// } from "@mantine/core";
// import { useMediaQuery } from "@mantine/hooks";
// import { useForm } from "@mantine/form";
// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L, { LatLng } from "leaflet";
// import "leaflet/dist/leaflet.css";

// const customIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
//   iconSize: [32, 32],
//   iconAnchor: [16, 32],
//   popupAnchor: [0, -32],
// });

// const cities = [
//   { name: "Abuja DCHI", position: [9.0579, 7.4951] },
//   { name: "Bauchi DCHI", position: [10.3157, 9.8475] },
//   { name: "Gombe DCHI", position: [10.299, 11.1686] },
//   { name: "Kaduna DCHI", position: [10.521, 7.4384] },
//   { name: "Kano DCHI", position: [12.0022, 8.5916] },
//   { name: "Katsina DCHI", position: [12.9864, 7.6006] },
//   { name: "Kogi DCHI", position: [7.8196, 6.4162] },
//   { name: "Kwara DCHI", position: [8.5953, 4.5477] },
//   { name: "Niger DCHI", position: [9.0775, 6.5561] },
//   { name: "Saminaka DCHI", position: [10.2167, 8.4373] },
//   { name: "Plateau DCHI", position: [9.3133, 9.2882] },
//   { name: "Southern Kaduna DCHI", position: [10.3093, 8.2357] },
// ];

// function ContactPage() {
//   const isMobile = useMediaQuery("(max-width: 768px)");

//   const form = useForm({
//     mode: "uncontrolled",
//     initialValues: {
//       email: "",
//       name: "",
//       comment: "",
//       termsOfService: false,
//     },

//     validate: {
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
//     },
//   });

//   return (
//     <section id="contact">
//       <Paper
//         style={{
//           paddingRight: "1rem",
//           paddingLeft: "1rem",
//         }}
//       >
//         <Title
//           style={{
//             marginTop: "1.5rem",
//             fontSize: isMobile ? "2rem" : "2.5rem",
//             fontWeight: "bold",
//             paddingLeft: isMobile ? "1rem" : "2rem",
//             textAlign: isMobile ? "start" : "center",
//           }}
//         >
//           We Are Always Ready to Help You.
//         </Title>

//         <Box mt="lg" style={{ height: "300px", width: "100%" }}>
//           <MapContainer
//             center={[9.082, 8.6753]}
//             zoom={6}
//             style={{ height: "100%", width: "100%" }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />

//             {cities.map((city) => (
//               <Marker
//                 key={city.name}
//                 position={new LatLng(city.position[0], city.position[1])}
//                 icon={customIcon}
//               >
//                 <Popup>{city.name}</Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </Box>

//         <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//           <form
//             style={{ marginTop: "2rem" }}
//             onSubmit={form.onSubmit((values) => console.log(values))}
//           >
//             <TextInput
//               size="lg"
//               label="Name"
//               placeholder="Name"
//               {...form.getInputProps("name")}
//             />
//             <Space h="lg" />
//             <TextInput
//               size="lg"
//               label="Email"
//               placeholder="your@email.com"
//               {...form.getInputProps("email")}
//             />
//             <Space h="lg" />
//             <Textarea
//               size="xl"
//               label="Comment"
//               withAsterisk
//               placeholder="Write your message here..."
//               {...form.getInputProps("comment")}
//             />
//             <Space h="lg" />
//             <Group justify="flex-end" mt="md">
//               <Button type="submit">Submit</Button>
//             </Group>
//           </form>

//           <div className="h-100 w-400">
//             <Image src="/Doctors.jpeg" alt="doctor" fit="cover" />
//           </div>
//         </div>
//       </Paper>
//     </section>
//   );
// }

// export default ContactPage;
