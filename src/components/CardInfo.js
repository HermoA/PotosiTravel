import styled from "@emotion/styled";
import { Button, Paper, Typography } from "@mui/material";
import React from "react";

const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  zIndex: "1",
});

export default function CardInfo({image, nombre}) {
  return (    
      <Paper
        sx={{
          borderRadius: "3%",
          height: 550,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          mt: 5,
          position: "relative",
        }}
      >
        <Img src={image} className="cardImg" />
        <Typography
          variant="h3"
          textAlign={"left"}
          fontFamily={"Oswald"}
          sx={{ position: "absolute", top: "5%", zIndex: "10", ml: 2, color:'white' }}
        >
          {nombre}
        </Typography>
        <Button
          size="small"
          sx={{
            position: "absolute",
            top: "90%",
            zIndex: "10",
            ml: 2,
            color: "#fff",
          }}
        >
          Ver más
        </Button>
      </Paper>
  );
}
