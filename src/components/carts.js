import React, { Component } from "react";
import Slider from "react-slick";
import "./Carrusel.css";
import "./carts.css";
import img1 from "../img/web1.jpg";
import img2 from "../img/web2.jpg";
import img3 from "../img/web3.jpg";
import img4 from "../img/web4.jpg";
import img5 from "../img/web5.jpg";
const images = [
  {
    src: img2,
    title: "SALAR DE UYUNI",
    description:
      "El salar de Uyuni, a veces conocido como salar de Tunupa, es el mayor desierto de sal continuo y alto del mundo, con una superficie de 10 582 km².",
  },
  {
    src: img1,
    title: "PASEO OVELISCO",
    description:
      "El Pasaje del Boulevard, es muy tradicional en Potosí, pues desde tiempos de la Colonia fue usado para fines de paseo.",
  },  
  {
    src: img3,
    title: "VISTA AEREA",
    description:
      "Potosí, o Villa Imperial de Potosí, es una ciudad del suroeste de Bolivia, capital y ciudad más poblada del departamento homónimo y de la provincia de Tomás Frías.",
  },
  {
    src: img4,
    title: "CASA DE LA MONEDA",
    description:
      "A comienzos del Virreinato del Perú la sorprendente extracción de la plata del Cerro Rico, el crecimiento de la población, la expansión del comercio y el inesperado auge que alcanzó la Villa Imperial de Potosí.​",
  },
  {
    src: img5,
    title: "CASA DE LA MONEDA",
    description:
      "A comienzos del Virreinato del Perú la sorprendente extracción de la plata del Cerro Rico, el crecimiento de la población, la expansión del comercio y el inesperado auge que alcanzó la Villa Imperial de Potosí​",
  },
];

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 200,
      autoplaySpeed: 6000,
      cssEase: "linear",
      fade: true,
      arrows: false,
    };
    const rightMode = false;
    return (
      <div className="ContainerImg">
        <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {images.map((image, index) => (
            <div key={index} className="corteImg">
              <div className="datosimg">
                <h3 className="titulo">{image.title}</h3>
                <p className="descripcion">{image.description}</p>
                <button className="BotonImg"> link Imagen </button>
              </div>
              <img className="sliderimg" src={image.src} alt={image.title} />
            </div>
          ))}
        </Slider>
        <Slider className="cartas"
          dots= {false}
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={4}
          rightMode= {true}
          swipeToSlide={true}
          focusOnSelect={true}
          rightPadding= {"300px"}
          arrows = {false}         
        >
          {images.map((image, index) => (
            <div key={index}>
              <button className="botonImg">
                <img className ={`tarjetaimg ${rightMode ? "active" : ""}`} src={image.src} alt={image.title} />
              </button>
            </div>
          ))}
        </Slider>        
        
      </div>
    );
  }
}
