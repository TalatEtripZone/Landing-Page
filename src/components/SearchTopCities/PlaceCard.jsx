import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import image1 from "./../../assets/cardImage/Sydney.png";
import image2 from "./../../assets/cardImage/Turkey.png";
import image3 from "./../../assets/cardImage/Singapore.png";
import image4 from "./../../assets/cardImage/Jubel.png";
import { Box, Grid } from "@mui/material";

const cities = [
  { name: "Sydney", price: "From 400 USD", image: image1 },
  { name: "Turkey", price: "From 400 USD", image: image2 },
  {
    name: "Singapore",
    price: "From 400 USD",
    image: image3,
  },
  { name: "Jubel", price: "From 400 USD", image: image4 },
];

export default function PlaceCard() {
  return (
    <Box>
      <Grid container spacing={5} sx={{ my: 5 }}>
        {cities.map((city) => (
          <Grid item key={city.name} xs={12} sm={6} md={3}>
            <Card sx={{ position: "relative" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image={city.image}
                  alt={city.name}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "60px",
                    color: "white",
                  }}
                >
                  <Typography sx={{ fontSize: "1.5em", fontWeight: "500" }}>
                    {city.name}
                  </Typography>
                  <Typography sx={{ fontSize: "1.125em", fontWeight: "500" }}>
                    {city.price}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
