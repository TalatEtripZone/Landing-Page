import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import PlaceCard from "./PlaceCard";

export default function SearchTopCities() {
  return (
    <Box sx={{ maxWidth: "1474px", margin: "auto" }}>
      {/* Heading and Button Group */}
      <Box
        sx={{
          boxShadow: "none",
          color: "black",

          marginTop: "161px",
        }}
      >
        <Typography
          sx={{ fontSize: "2.25em", fontWeight: "500", marginBottom: "30px" }}
        >
          Search Top Cities Popular Destinations Flight
        </Typography>
        <Button
          sx={{
            bgcolor: "#122E55",
            border: "none",
            color: "white",
            fontSize: "1.2em",
            fontWeight: "700",
            textTransform: "initial",
            px: 4,
            ":hover": { bgcolor: "#178E85" },
          }}
        >
          All
        </Button>
        <Button
          sx={{
            bgcolor: "#none",
            border: "none",
            color: "black",
            fontSize: "1.2em",
            fontWeight: "700",
            textTransform: "initial",
            px: 4,
            ":hover": { cursor: "pointer" },
          }}
        >
          Asia
        </Button>
        <Button
          sx={{
            bgcolor: "#none",
            border: "none",
            color: "black",
            fontSize: "1.2em",
            fontWeight: "700",
            textTransform: "initial",
            px: 4,
            ":hover": { cursor: "pointer" },
          }}
        >
          Middle East
        </Button>
        <Button
          sx={{
            bgcolor: "none",
            border: "none",
            color: "black",
            fontSize: "1.2em",
            fontWeight: "700",
            textTransform: "initial",
            px: 4,
            ":hover": { cursor: "pointer" },
          }}
        >
          Europe
        </Button>
        <Button
          sx={{
            bgcolor: "none",
            border: "none",
            color: "black",
            fontSize: "1.2em",
            fontWeight: "700",
            textTransform: "initial",
            px: 4,
            ":hover": { cursor: "pointer" },
          }}
        >
          Ameriaca
        </Button>
        <Button
          sx={{
            bgcolor: "none",
            border: "none",
            color: "black",
            fontSize: "1.2em",
            fontWeight: "700",
            textTransform: "initial",
            px: 4,
            ":hover": { cursor: "pointer" },
          }}
        >
          Africa
        </Button>
      </Box>
      {/* Place Card */}
      <PlaceCard />
    </Box>
  );
}
