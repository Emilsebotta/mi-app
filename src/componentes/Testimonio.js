import React from "react";
import '../hojas-de-estilo/testimonio.css';
function Testimonio(){
    return(
    <div className='contenedor-Testimonio'>
        <img className='imagen-Testimonio'
        src={require('../imagenes/testimonio-emma.png')}
        alt='foto de emma' />

        <div className='contedor-texto-Testimonio'>
            <p className='nombre-Testimonio'>Emma Bostian ne Suecia</p>
        <p className='cargo-Testimonio'>Ingeniera en Software en Spotify</p>
        <p className='texto-Testimonio'>I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.</p>


        </div>

    </div>
    )
}
export default Testimonio;