import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../img/LogoTravelPotosi.svg";
import llamita from "../img/llamita_logo.svg";
import "./footer.css";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Img = styled("img")({
  width: "50px",
  padding: 0,
  margin: 50,
});

export default function Footer() {
  return (
    <Box sx={{ height: "500px", width: "100%", margin: "auto", backgroundColor:"#1b1b1b", pl:"10%", pr:"10%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Img src={llamita} alt="logo" className="LogoLlamita" />
        </Grid>
        <Grid item xs={12}>
          <Divider color="#fff" />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <img src={Logo} alt="logo" className="LogoFooter" />
        </Grid>
        <Grid item xs={3} className="Links" sx={{flexDirection:"column"}}>
          <Typography fontWeight="bold">Sobre nosotros</Typography>
          <a href="https://example.com">Contactanos</a>
          <a href="https://example.com">Informacion</a>
        </Grid>
        <Grid item xs={3} className="Links" sx={{flexDirection:"column"}}>
          <Typography fontWeight="bold">Más de Potosí</Typography>
          <a href="https://example.com">Guias turisticos</a>
          <a href="https://example.com">Museos</a>
          <a href="https://example.com">Eventos</a>
        </Grid>
        <Grid item xs={3} className="Links" sx={{flexDirection:"column"}}>
          <Typography fontWeight="bold">Donde ir</Typography>
          <a href="https://example.com">Comida</a>
          <a href="https://example.com">Museos</a>
          <a href="https://example.com">Hoteles</a>
        </Grid>
        <Grid item xs={3} className="Links" sx={{flexDirection:"column"}}>
          <Typography fontWeight="bold">Mas lugares</Typography>
          <a href="https://example.com">pagina de turismo</a>
          <a href="https://example.com">pagina potosi</a>
          <a href="https://example.com">pagina bolivia</a>
        </Grid>
        <Grid item xs={12} sx={{ display:"flex", gap:"10px",color:"white", mt:"10px", mb:"10px"}}>
           <FacebookIcon fontSize="large" className="RedesSociales"/>
           <TwitterIcon fontSize="large" className="RedesSociales"/>
           <InstagramIcon fontSize="large" className="RedesSociales"/>
           <WhatsAppIcon fontSize="large" className="RedesSociales"/> 
        </Grid>
        <Grid item xs={12} sx={{mt:"50px", mb:"10px"}}>
          <Typography variant="h6" align="center" color="#fff">
            www.travelpotosi.com
          </Typography>
        </Grid>        
      </Grid>
    </Box>
  );
}
