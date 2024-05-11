import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import NearMeIcon from "@mui/icons-material/NearMe";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function FlightCard() {
  return (
    <Box sx={{ mx: "50px", my: "97px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={12} lg={3}>
          <Item sx={{ display: "flex", gap: 2, boxShadow: "none" }}>
            <NearMeIcon
              sx={{
                width: "51px",
                height: "47px",
                padding: "5px",
                bgcolor: "#187FAF",
                color: "white",
                borderRadius: "5px 0px 5px 0px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "1.125em",
                  fontWeight: "700",
                  color: "#187FAF",
                }}
              >
                The World Biggest <br /> Travel Search Engine
              </Typography>

              <Typography
                sx={{ color: "#757678", textAlign: "left", mt: "14px" }}
              >
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software{" "}
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Item sx={{ display: "flex", gap: 2, boxShadow: "none" }}>
            <FlightTakeoffIcon
              sx={{
                width: "51px",
                height: "47px",
                padding: "5px",
                bgcolor: "#187FAF",
                color: "white",
                borderRadius: "5px 0px 5px 0px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "1.125em",
                  fontWeight: "700",
                  color: "#187FAF",
                }}
              >
                Cheap and Best Air <br /> Ticket
              </Typography>

              <Typography
                sx={{ color: "#757678", textAlign: "left", mt: "14px" }}
              >
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software{" "}
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Item sx={{ display: "flex", gap: 2, boxShadow: "none" }}>
            <SupportAgentIcon
              sx={{
                width: "51px",
                height: "47px",
                padding: "5px",
                bgcolor: "#187FAF",
                color: "white",
                borderRadius: "5px 0px 5px 0px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "1.125em",
                  fontWeight: "700",
                  color: "#187FAF",
                }}
              >
                Our Support Line <br /> online 24/hr
              </Typography>

              <Typography
                sx={{ color: "#757678", textAlign: "left", mt: "14px" }}
              >
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software{" "}
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Item sx={{ display: "flex", gap: 2, boxShadow: "none" }}>
            <NearMeIcon
              sx={{
                width: "51px",
                height: "47px",
                padding: "5px",
                bgcolor: "#187FAF",
                color: "white",
                borderRadius: "5px 0px 5px 0px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  textAlign: "left",
                  fontSize: "1.125em",
                  fontWeight: "700",
                  color: "#187FAF",
                }}
              >
                Continent Payment <br /> Method for you
              </Typography>

              <Typography
                sx={{ color: "#757678", textAlign: "left", mt: "14px" }}
              >
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software{" "}
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
