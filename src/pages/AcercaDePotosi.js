import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Potosi from "../img/potosi.jpg";
import "./acercaDePotosi.css";
import MapaPotosi from "../img/Mapa_de_localización_Potosí.svg";
import MapaBolivia from "../img/Bolivia_location_map.svg";
import Footer from "../components/Footer";
import MenuResposive from "../components/menu/Menu_resposive";
export default function AcercaPotosi() {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
    <MenuResposive/>
      <div className="contenedorImagen">
        <img className="imagenpotosi" src={Potosi} alt="potosi" />
        <Typography
          className="PotosiTitulo"
          variant="h3"
          align="center"
          sx={{
            width: "100%",
            zIndex: 10,
            position: "absolute",
            mt: "-600px",
            fontWeight: "bold",
            fontSize: "150px",
            color: "white",
          }}
        >
          POTOSÍ
        </Typography>
      </div>
      <Grid container spacing={3} sx={{ width: "70%", margin: "auto" }}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" sx={{ margin: 5 }}>
            Departamento de Potosí
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            Potosí, o Villa Imperial de Potosí, es una ciudad del suroeste de
            Bolivia, capital y ciudad más poblada del departamento homónimo y de
            la provincia de Tomás Frías. Se extiende a las faldas de la
            legendaria montaña llamada Cerro Rico (en quechua: Sumaq Urqu), en
            la cual se situó la mina de plata más grande del mundo desde
            mediados del siglo XVI hasta mediados del siglo XVII. Así como gran
            parte del territorio actual de Bolivia, Potosí en primera instancia
            pertenecía al Virreinato del Perú, hasta 1776, y luego fue
            incorporada por la corona española al nuevo Virreinato del Río de la
            Plata.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            Fue declarada Patrimonio Cultural de la Humanidad por la UNESCO en
            1987 siendo el primer reconocimiento oficial que hizo esta
            organización internacional en Bolivia, debido a su aporte a la
            historia universal y su atractivo arquitectónico y artístico, siendo
            considerada como cuna del barroco andino en Bolivia.
          </Typography>
          <Typography variant="h4">Historia</Typography>
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            La historia del Potosí se remonta a mediados del siglo xv, cuando
            estuvo por estas tierras el inca Huayna Capac para combatir a los
            guaraníes. Parte de la historia nos relata el cronista potosino
            Bartolomé Arzáns de Orsúa y Vela (1674-1736), en su magnífica obra
            Historia de la Villa Imperial de Potosí y Anales de la Villa
            Imperial de Potosí.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            El XI inca, hijo de Túpac Yupanqui, se llamó Huayna Cápac, que se
            interpreta Mancebo poderoso. Este fue aquel insigne en riquezas, de
            que puede causar admiración al mundo, que tuvo rimeros de oro y
            grandes montones de plata, pues como cuentan los cronistas Garcilaso
            de la Vega y el padre maestro fray Antonio de la Calancha con otros
            autores.
          </Typography>
          <Typography variant="body2" sx={{ paddingTop: "10px" }}>
            Admirado de su grandeza y hermosura dijo (hablando con los de su
            corte): «Este sin duda tendrá en sus entrañas mucha plata»; por lo
            cual mandó a sus vasallos que luego que llegasen a Ccolque Porco
            (que está distante de esta Villa siete leguas) volviesen, labrasen
            sus minas y le sacasen el rico metal. Así lo hicieron, y habiendo
            traído sus instrumentos de pedernal y madera fuerte subieron al
            Cerro; y después de haber tanteado sus vetas, estando para comenzar
            a abrir sus venas, se oyó un espantoso estruendo que hizo estremecer
            todo el Cerro y tras esto fue oída una voz que dijo: «No saquéis la
            plata de este Cerro, porque es para otros dueños». Asombrados los
            indios de oír estas razones desistieron del intento, volvieron a
            Porco y dijeron al rey lo que había sucedido; refiriendo el caso en
            su idioma, al llegar a la palabra del estruendo dijeron «Potocsi»
            que quiere decir dio un gran estruendo, y de aquí se derivó después
            (corrompiendo una letra) el nombre de Potosí. Esto sucedió (según la
            más probable cuenta) 83 años antes que los españoles descubriesen
            este famoso Cerro, y desde aquel tiempo se llamó Potocsi. Antonio de
            Acosta en la Historia de Potosí le da otra etimología, añadiendo que
            no tan solamente por el suceso dicho se llamó Potocsi más también
            porque luego que se descubrió el Cerro lo nombraron los indios Orcco
            Poctocchi, que quiere decir cerro que brota plata. Añade más este
            autor, diciendo que antes que el rey Huayna Ccápac viniese a esta
            provincia de Porco llamaban los indios al Cerro, Súmac Orcco, que
            significa hermoso cerro, por su hermosura exterior que, con más
            razón lo pudieran llamar así si vieran y sacaran la interior que
            tenía; más guardóla Dios para otros dueños, según se oyó en aquella
            voz que queda dicho, como lo cuentan el comentador Garcilaso de la
            Vega, el capitán Pedro Méndez, Bartolomé de Dueñas y Juan Sobrino. Y
            es cosa para notar que viviendo los indios tan cercanos al Cerro y
            andando sobre él no llegasen a gozar de su riqueza ellos ni sus
            reyes, estando labrando poderosas minas en Porco y Andaccaua, que
            distan de esta Villa siete leguas. Pero como la divina voluntad se
            lo impedía, pudo estar seguro hasta que fue servida de darla a un
            tan indignadísimo monarca como el emperador Carlos V.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" align="center">
            Localizacion de Potosí en Bolivia
          </Typography>
          <div className="contendMapas">
            <img src={MapaBolivia} alt="bolivia" className="mapas" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" align="center">
            Localizacion de Potosí
          </Typography >
          <div className="contendMapas">
            <img src={MapaPotosi} alt="potosi" className="mapas" />
          </div>
        </Grid>
      </Grid>
      <Footer/>
    </Box>
  );
}
