import styled from "@emotion/styled";
import { Button, Paper, Typography} from "@mui/material";
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  zIndex: "1",
});

export default function destino({image,destino,descripcion}) {
  return (    
      <Paper
        sx={{
          height: 450,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
        }}
        className="ContenedorDestino"
      >
        <Img src={image} className="cardDestino" />
        <div className="InfoDestino">
          <Button variant="outlined" sx={{color: 'white', border: '1px solid white', mb:5}}>DESTINO</Button>
          <Typography variant="h3" textAlign="end" sx={{color: 'white',fontWeight: "bold", width:300, mb: 5}}>{destino}</Typography>
          <Typography variant="P" textAlign="end" sx={{color: 'white',mb:15}}>{descripcion}</Typography>
          <Button size="large" sx={{color: 'white'}}><ArrowForwardIcon/></Button>
        </div>
      </Paper>
  );
}