import React from "react";
import { Grid, Typography } from "@mui/material";
import aventura from "../img/Aventura.jpg";
import cultura from "../img/cultura.jpg";
import gastronomia from "../img/gastronomia.jpg";
import chutillos from "../img/chu.jpg";
import "./InfoTravel.css";
import CardInfo from "./CardInfo";

export default function InfoTravel() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ width: "95%", margin: "auto", pb: 20, pt: 5}}
    >
      <Grid item xl={12} sm={12} lg={12}>
        <Typography
          variant="h2"
          textAlign={"center"}
          sx={{ mt: "50px", color: "white", fontWeight: "bold" }}
          fontFamily={"Oswald"}
        >
          Explora la cultura Potosina
        </Typography>
      </Grid>
      <Grid item xl={3} sm={12} lg={6} md={6}>
        <CardInfo image={aventura} nombre="Aventura" />
      </Grid>
      <Grid item xl={3} sm={12} lg={6} md={6}>
        <CardInfo image={cultura} nombre="Historia" />
      </Grid>
      <Grid item xl={3} sm={12} lg={6} md={6}>
        <CardInfo image={gastronomia} nombre="Gastronomia" />
      </Grid>
      <Grid item xl={3} sm={12} lg={6} md={6}>
        <CardInfo image={chutillos} nombre="Cultura" />
      </Grid>
    </Grid>
  );
}
