import React, { useState, useEffect } from "react";
import MenuList from "./MenuList";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import Logo from "../../img/LogoTravelPotosi.svg";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./Menu.css";
import PestanaLogin from "../PestanaLogin";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";



const Img = styled("img")({
  width: "70px",
  padding: 0,
  margin: 0,
  objectPosition: "center",
});
const MenuLinktop = [
  { title: "Acerca de Potosí", path: "/#/acercade" },
  { title: "Contactos", path: "/#/contactanos" },
  { title: "Eventos", path: "/#/eventos" },
];
const MenuLinkButoon = [
  { title: "Lugares", path: "/#/lugares" },
  { title: "Comida", path: "/#/comida" },
  { title: "Hoteles", path: "/#/com_1" },
  { title: "Guias", path: "/#/com_2" },
  { title: "Turismo", path: "/#/acercade" },
];

export default function MenuResposive() {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  /////////escroll///////////////
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY || window.pageYOffset);
  };

  useEffect(() => {
    // Agrega el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El segundo parámetro [] asegura que el efecto solo se ejecute al montar y desmontar el componente

  const divStyle = {
    backgroundColor: scrollPosition === 0 ? '' : '#1b1b1b',
    transition: 'background-color 0.5s ease',
  };

  /////////////////////escroll/////////////////////////
  
  return (
    <>
      <AppBar
      style={divStyle}
        position="fixed"
        sx={{
          background: "linear-gradient(#000000, rgba(255,255,255,0))",
          boxShadow: "none",
          pt: 2,
          pl:'25px', pr:'25px',
          padding:{xs: 1}                    
        }}
      >
        <Toolbar sx={{justifyContent:{xs:"space-between"},margin: 0, padding:0, width:{xs:"100%"}}}>
          <IconButton
            color="inherit"
            onClick={() => {
              setOpen(true);
            }}
            sx={{ display: { xs: "flex", sm: "none"}, minHeight:'30px', }}
          >
            <MenuIcon />
          </IconButton>
          <Button>
            <Link to="/"><Img src={Logo} alt="" /></Link>
          </Button>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
              mr: 9,
              gap:2,              
            }}
          >            
            {MenuLinktop.map((item) => (              
              <Button
                className="botonMenu"
                component="a"
                href={item.path}
                color="inherit"
                key={item.title}
                sx={{}}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <IconButton color="inherit" onClick={() => {
              setOpenLogin(true);
            }}>            
            <AccountCircleOutlinedIcon  />
          </IconButton>
        </Toolbar>
        <Toolbar classes={{root: "toolbarBack"}} className="toolbar" sx={{ alignItems: "flex-start"}}>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
                gap:15,
              },
            }}
          >
            {MenuLinkButoon.map((item) => (
              <Button
                className="botonMenu"
                component="a"
                href={item.path}
                color="inherit"
                key={item.title}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => {
          setOpen(false);
        }}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <MenuList />
      </Drawer>
      <Drawer
        open={openLogin}
        anchor="right"
        onClose={() => {
          setOpenLogin(false);
        }}
      >
        <Button onClick={()=>{setOpenLogin(false)}}><CloseIcon/></Button>
        <PestanaLogin />
      </Drawer>
    </>
  );
}
