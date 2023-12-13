import React from "react";
import { Grid, Typography } from "@mui/material";
import Destino from "./Destino";
import Potosi from "../img/potosi.jpg";
import salar from "../img/salar.jpg";
import puente from "../img/puente.jpg";
import salar2 from "../img/salar_2.jpg";
import "./destino.css";

export default function InfoTravel() {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        width: "100%",
        margin: "auto",
        pl: {xl:"15%", lg:"10%", md:0, sm:0},
        pr: {xl:"15%", lg:"10%", md:0, sm:0},
        pb: 9,
        pt: 3,
        backgroundColor: "white",
      }}
    >
      <Grid item sm={12} md={12} lg={12} xl={12}>
        <Typography
          variant="h2"
          textAlign={"center"}
          sx={{ mt: "50px", fontWeight: "bold" }}
          fontFamily={"Oswald"}
        >
          Destinos favoritos
        </Typography>
        <Typography
          variant="h5"
          textAlign={"center"}
          sx={{ mt: "20px", color: "#d52b1e",pb: 10, }}
          fontFamily={"Oswald"}
        >
          Disfruta de lo mejor de Potosí
        </Typography>
      </Grid>
      <Grid item sm={12} md={12} lg={12} xl={12}>
        <Destino image={Potosi} destino="CERRO RICO" descripcion="Vale un potosi" />
      </Grid>
      <Grid item sm={12} md={12} lg={12} xl={12}>
        <Destino image={salar} destino="SALAR DE UYUNI" descripcion="Vale un potosi"/>
      </Grid>
      <Grid item sm={12} md={12} lg={12} xl={12}>
        <Destino image={puente} destino="PUENTE CAMINO" descripcion="Vale un potosi" />
      </Grid>
      <Grid item sm={12} md={12} lg={12} xl={12}>
        <Destino image={salar2} destino="VISTA ESPEJO" descripcion="Vale un potosi"/>
      </Grid>
    </Grid>
  );
}
