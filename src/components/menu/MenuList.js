import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "@emotion/styled";
import Logo from "../../img/LogoTravelPotosi.svg";
import ChurchIcon from "@mui/icons-material/Church";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HotelIcon from "@mui/icons-material/Hotel";
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import MuseumIcon from "@mui/icons-material/Museum";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Img = styled("img")({
  width: "50px",
  objectPosition: "center",
});

export default function MenuList() {
  return (
    <Box sx={{ width: "350px", backgroundColor: "#1b1b1b", color: "white" }}>
      <nav>
        <List>
          <ListItem>
            <Img src={Logo} alt="" />
          </ListItem>
          <ListItemButton>
            <Typography variant="h6">Acerca de potosi</Typography>
          </ListItemButton>
          <ListItemButton>
            <Typography variant="h6">Contactos</Typography>
          </ListItemButton>
          <ListItemButton>
            <Typography variant="h6">Eventos</Typography>
          </ListItemButton>
          <Divider color="white" />
          <ListItemButton>
            <ChurchIcon fontSize="large" />
            <Typography variant="h6" sx={{ ml: 2 }}>
              Lugares
            </Typography>
          </ListItemButton>
          <Divider variant="middle" color="white" />
          <ListItemButton>
            <RestaurantIcon fontSize="large" />
            <Typography variant="h6" sx={{ ml: 2 }}>
              Comida
            </Typography>
          </ListItemButton>
          <Divider variant="middle" color="white" />
          <ListItemButton>
            <HotelIcon fontSize="large" />
            <Typography variant="h6" sx={{ ml: 2 }}>
              Hoteles
            </Typography>
          </ListItemButton>
          <Divider variant="middle" color="white" />
          <ListItemButton>
            <LoyaltyIcon fontSize="large" />
            <Typography variant="h6" sx={{ ml: 2 }}>
              Guia turístico
            </Typography>
          </ListItemButton>
          <Divider variant="middle" color="#f5f5f5" />
          <ListItemButton>
            <MuseumIcon fontSize="large" />
            <Typography variant="h6" sx={{ ml: 2 }}>
              Turismo
            </Typography>
          </ListItemButton>
          <Divider variant="middle" color="#f5f5f5" />
          <Box sx={{mt:25, pb:5}}>
            <Button variant="a">
              <FacebookIcon fontSize="large" />
            </Button>
            <Button variant="a">
              <TwitterIcon fontSize="large" />
            </Button>
            <Button variant="a">
              <InstagramIcon fontSize="large" />
            </Button>
            <Button variant="a">
              <WhatsAppIcon fontSize="large" />
            </Button>
          </Box>
        </List>
      </nav>
    </Box>
  );
}
