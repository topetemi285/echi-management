// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L, { LatLng } from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { Box } from "@mantine/core";

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

// function Map() {
//   if (typeof window !== "undefined") {
//     return (
//       <div>
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
//       </div>
//     );
//   } else {
//     return <div>Loading...</div>;
//   }
// }

// export default Map;
