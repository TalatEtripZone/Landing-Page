import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CallIcon from "@mui/icons-material/Call";
import FooterLinks from "./FooterLinks";
import FooterCard from "./FooterCard";
import About from "./About";
export default function () {
  return (
    <Box sx={{ bgcolor: "#187FAF" }}>
      <Box
        sx={{
          maxWidth: "1452px",
          margin: "auto",
          paddingTop: "85px",
          paddingBottom: "67px",
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <About />

          <FooterCard />
        </Box>
        <FooterLinks />
        <hr />
        <Typography
          sx={{
            color: "white",
            ml: { sm: 2, xs: 2 },
          }}
        >
          2023 all the copy right reserved
        </Typography>
      </Box>
    </Box>
  );
}
