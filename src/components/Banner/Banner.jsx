import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import backGroundImage from "../../assets/bg.png";
import FlightIcon from "@mui/icons-material/Flight";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FlyIcon from "../../assets/Icons/fly.svg";
import NearMeIcon from "@mui/icons-material/NearMe";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Banner.css";

import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
export default function NewBanner() {
  const [isSwapped, setIsSwapped] = React.useState(false);

  const handleSwap = () => {
    setIsSwapped((prev) => !prev);
  };
  return (
    <Card sx={{ maxWidth: "full", boxShadow: "none", position: "relative" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          loading="lazy"
          sx={{
            height: {
              xl: "567",
              lg: "567px",
              md: "667px",
              sm: "700px",
              xs: "700px",
            },
          }}
          image={backGroundImage}
          alt="ETrip Banner"
        />
        <Box
          sx={{
            bgcolor: "none",
            position: "absolute",
            top: { lg: 160, md: 100, sm: 20, xs: 20 },
            left: { xl: "280px", lg: "200" },
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: { xl: "3em", lg: "3em" },
              fontWeight: "700",
              color: "white",
              px: { xl: 0, lg: 2, md: 2, sm: 2, xs: 2 },
            }}
          >
            Are You Ready To Take Off with Confidance
          </Typography>

          <Box
            sx={{
              maxWidth: "1298px",
              height: { xl: "239px", lg: "239px", sm: "500px", xs: "700px" },
              bgcolor: {
                xl: "rgba(24, 127, 175, 0.6)",
                lg: "rgba(24, 127, 175, 0.6)",
                md: "rgba(24, 127, 175, 0.6)",
                sm: "rgba(24, 127, 175, 0.6)",
                xs: "#187FAF",
              },

              mt: "38px",
              mx: "auto",
              borderRadius: "9px",
            }}
          >
            <Box
              sx={{
                boxShadow: "none",
                bgcolor: "#187FAF",
                color: "white",
              }}
            >
              <Button
                sx={{
                  bgcolor: "#113159",
                  border: "none",
                  color: "white",
                  px: 4,
                  ":hover": { bgcolor: "#113159" },
                }}
              >
                <FlightIcon sx={{ mr: "7px" }}></FlightIcon>
                Book Flight
              </Button>
              <Button
                sx={{
                  bgcolor: "#none",
                  border: "none",
                  color: "white",
                  px: 4,
                  ":hover": { bgcolor: "#178E85" },
                }}
              >
                <TravelExploreIcon sx={{ mr: "7px" }}></TravelExploreIcon>
                Tour Package
              </Button>
              <Button
                sx={{
                  bgcolor: "#none",
                  border: "none",
                  color: "white",
                  px: 4,
                  ":hover": { bgcolor: "#178E85" },
                }}
              >
                <CreditCardIcon sx={{ mr: "7px" }}></CreditCardIcon>
                Hotel
              </Button>
              <Button
                sx={{
                  bgcolor: "none",
                  border: "none",
                  color: "white",
                  px: 4,
                  ":hover": { bgcolor: "#178E85" },
                }}
              >
                <DarkModeIcon sx={{ mr: "7px" }}></DarkModeIcon>
                Umrah
              </Button>
              <Button
                sx={{
                  bgcolor: "none",
                  border: "none",
                  color: "white",
                  px: 4,
                  ":hover": { bgcolor: "#178E85" },
                }}
              >
                <CreditCardIcon sx={{ mr: "7px" }}></CreditCardIcon>
                Visa
              </Button>
            </Box>
            <Box sx={{ mt: "18px", ml: "54px" }}>
              <FormControl sx={{ color: "white" }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{
                    ":checked": { bgcolor: "white" },
                  }}
                >
                  <FormControlLabel
                    value="roundWay"
                    control={<Radio />}
                    label="Round Way"
                  />
                  <FormControlLabel
                    value="oneWay"
                    control={<Radio />}
                    label="One Way"
                  />
                  <FormControlLabel
                    value="multiCity"
                    control={<Radio />}
                    label="Multi City"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            {/* main card group */}
            <Box
              className="cardsItem"
              sx={{
                marginLeft: { lg: "40px", md: "20px", sm: "0px", xs: "0px" },
                px: 2,
                display: "grid",
                gridTemplateColumns: {
                  lg: "repeat(6,1fr)",
                  md: "repeat(3,1fr)",
                  sm: "repeat(2,1fr)",
                  xs: "repeat(2,1fr)",
                },
              }}
            >
              {/* First card */}
              <Box
                sx={{
                  maxWidth: {
                    lg: "234.76px",
                    md: "234.76px",
                    sm: "full",
                    xs: "full",
                  },
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "white",
                  gap: 2,
                  borderRadius: "3px",
                  px: "5px",
                  position: "relative",
                }}
              >
                <img
                  className="card-icon"
                  width="20px"
                  height="21px"
                  src={FlyIcon}
                  alt="card icon"
                />
                <Box>
                  <Typography sx={{ color: "#09988A" }}>
                    Departure At
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {isSwapped ? "New York" : "Dhaka"}
                  </Typography>
                </Box>
                <SwapHorizontalCircleIcon
                  onClick={handleSwap}
                  sx={{
                    width: "50px",
                    bgcolor: "white",
                    borderRadius: "5px",
                    position: "absolute",
                    right: "-35px",
                  }}
                />
              </Box>

              {/* second card */}
              <Box
                sx={{
                  maxWidth: {
                    lg: "234.76px",
                    md: "234.76px",
                    sm: "full",
                    xs: "full",
                  },
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "white",
                  gap: 2,
                  borderRadius: "3px",
                  px: "5px",
                }}
              >
                <img
                  className="card-icon"
                  width="20px"
                  height="21px"
                  src={FlyIcon}
                  alt=""
                />
                <Box>
                  <Typography sx={{ color: "#09988A" }}>Arrival At</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {isSwapped ? "Dhaka" : "New York"}
                  </Typography>
                </Box>
              </Box>

              {/* Third card */}
              <Box
                sx={{
                  width: { lg: "150px" },
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "white",
                  gap: 2,
                  borderRadius: "3px",
                  px: "5px",
                }}
              >
                <Box sx={{ ms: "5px" }}>
                  <Typography sx={{ color: "#09988A" }}>
                    Travel Date
                    <CalendarMonthIcon
                      sx={{ color: "gray" }}
                    ></CalendarMonthIcon>
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Wed, 06 Oct 23
                  </Typography>
                </Box>
              </Box>
              {/* Four card */}
              <Box
                sx={{
                  width: { lg: "150px" },
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "white",
                  gap: 2,
                  borderRadius: "3px",
                  px: "5px",
                }}
              >
                <Box sx={{ ms: "5px" }}>
                  <Typography
                    sx={{
                      color: "#09988A",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Return Date
                    <CalendarMonthIcon
                      sx={{ color: "gray" }}
                    ></CalendarMonthIcon>
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Sun, 06 Oct 23
                  </Typography>
                </Box>
              </Box>

              {/* fifth card */}
              <Box
                sx={{
                  width: { lg: "208px" },
                  height: { lg: "70px" },
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "white",
                  gap: 2,
                  borderRadius: "3px",
                  px: "5px",
                }}
              >
                <Box sx={{ ms: "5px" }}>
                  <Typography
                    sx={{
                      color: "#09988A",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Passenger & Class
                    <CalendarMonthIcon
                      sx={{ color: "gray" }}
                    ></CalendarMonthIcon>
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    1 Passenger & Economy
                  </Typography>
                </Box>
              </Box>

              <Button
                sx={{
                  width: { lg: "135px" },
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "#ED5A2B",
                  color: "white",
                  fontWeight: "700",
                  ":hover": {
                    bgcolor: "#ED5A2B",
                    color: "white",
                  },
                }}
              >
                {" "}
                <NearMeIcon />
                Search
              </Button>
            </Box>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
