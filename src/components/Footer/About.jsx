import React from "react";
import { Box, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function About() {
  return (
    <Box
      sx={{
        maxWidth: "499px",
        color: "white",
        padding: "5px 10px",
      }}
    >
      <Typography sx={{ fontSize: "1.5em", fontWeight: "500" }}>
        About Us
      </Typography>
      <Typography sx={{ fontSize: "1.125em", fontWeight: "500" }}>
        Lorem ipsum dolor sit amet consectetur. Etiam sapien donec eget
        elementum sollicitudin sagittis. Ultricies commodo neque augue velit
        cursus. Ultrices scelerisque risus et aliquam at eget neque viverra.
        Lacus cras vel blandit dui ullamcorper sed eu sapien. Neque aliquet
        tortor tristique suspendisse massa molestie tincidunt adipiscing.
        Viverra sit imperdiet et malesuada aliquet malesuada in pretium.
      </Typography>
      <Typography
        sx={{
          fontSize: "1.125em",
          fontWeight: "500",
          gap: 3,
          marginTop: "25px",
        }}
      >
        <FacebookOutlinedIcon sx={{ width: "25px", height: "24px", mr: 2 }} />
        <InstagramIcon sx={{ width: "25px", height: "24px", mr: 2 }} />
        <LinkedInIcon sx={{ width: "25px", height: "24px", mr: 2 }} />
        <TwitterIcon />
      </Typography>
    </Box>
  );
}
