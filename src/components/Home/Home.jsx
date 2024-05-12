import { Box, Button, Stack } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import FlightCard from "../FlightCard/FlightCard";
import SearchTopCities from "../SearchTopCities/SearchTopCities";
import Footer from "../Footer/Footer";
// import NewSearch from "../NewSearch/NewSearch";

export default function Home() {
  return (
    <Box>
      <Banner />
      <FlightCard />
      <SearchTopCities />
    </Box>
  );
}
