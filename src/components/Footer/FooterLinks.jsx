import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function FooterLinks() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          my: 5,
          justifyContent: { lg: "flex-end" },
          color: "white",
        }}
      >
        <Box sx={{ mx: 5, my: 2 }}>
          <Typography>Quick Links</Typography>
          <Typography>About Us</Typography>
          <Typography>Contact us</Typography>
          <Typography>B2B Agent</Typography>
          <Typography>Tour Guide</Typography>
        </Box>
        <Box sx={{ mx: 5, my: 2 }}>
          <Typography>Flight Booking</Typography>
          <Typography>Hotel Booking</Typography>
          <Typography>Tour Booking</Typography>
          <Typography>Car Booking</Typography>
        </Box>
        <Box sx={{ mx: 5, my: 2 }}>
          <Typography>Our Partners</Typography>
          <Typography>News</Typography>
          <Typography>Promotions</Typography>
        </Box>
        <Box sx={{ mx: 5, my: 2 }}>
          <Typography>Payment Methods</Typography>
          <Typography>EMI</Typography>
          <Typography>Terms and Condtions</Typography>
        </Box>
      </Box>
    </Box>
  );
}
