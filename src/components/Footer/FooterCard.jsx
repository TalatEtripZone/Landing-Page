import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "@mui/material/Link";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CallIcon from "@mui/icons-material/Call";
export default function FooterCard() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { lg: "repeat(1,1fr)" },
        mx: 5,
      }}
    >
      <Box>
        {/* first card column */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { lg: "flex-end" },
            gap: 3,
            my: 5,
          }}
        >
          <Box>
            <Box
              sx={{
                color: "white",
              }}
            >
              <Card
                sx={{
                  width: { lg: "423px" },
                  height: "204px",
                  borderRadius: "16px",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ApartmentIcon sx={{ color: "#187FAF" }} />
                    <Link sx={{ color: "black" }} href="#">
                      view in map
                    </Link>
                  </Typography>

                  <Typography gutterBottom variant="h5" component="div">
                    Dhaka Office
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    78/E 3rd Floor Purana Paltan line, Bijay nagar, Dhaka
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: "flex", justifyItems: "center", my: 2 }}
                  >
                    <CallIcon
                      sx={{
                        color: "#187FAF",

                        fontWeight: "700",
                      }}
                    />
                    +880 15185818891
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
          {/* second card column */}
          <Box>
            <Box
              sx={{
                color: "white",
              }}
            >
              <Card
                sx={{
                  width: { lg: "423px" },
                  height: "204px",
                  borderRadius: "16px",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ApartmentIcon sx={{ color: "#187FAF" }} />
                    <Link sx={{ color: "black" }} href="#">
                      view in map
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Dhaka Office
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    78/E 3rd Floor Purana Paltan line, Bijay nagar, Dhaka
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: "flex", justifyItems: "center", my: 2 }}
                  >
                    <CallIcon
                      sx={{
                        color: "#187FAF",

                        fontWeight: "700",
                      }}
                    />{" "}
                    +880 15185818891
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
