import React from 'react';
import '../styles/About.css';
import Footer from '../components/Footer';
import benjamin from "../imagenes/benjamin.jpg"
import victor from "../imagenes/victor.jpg"
import eduardo from "../imagenes/eduardo.jpg"


const About = () => {
    
 

 

 return (
    <div className="about-us">
            <h1>Sobre Nosotros</h1>
            <h2>¡Bienvenidos a nuestra página!</h2>
            <p>Nuestro enfoque para este trabajo es poder facilitar la compra de distintos articulos para la gente y que se vea de una forma amigable para el comprador.</p>
            <p>Aqui tienen unas imagenes de los creadores:</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <img src={victor} alt="photo1" style={{ width: '15%', height: 'auto', borderRadius: '50%' }} />
                <img src={eduardo} alt="photo2" style={{ width: '15%', height: 'auto', borderRadius: '50%' }} />
                <img src={benjamin} alt="photo3" style={{ width: '15%', height: 'auto', borderRadius: '50%' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',  marginTop: '1rem', textAlign: 'center' }}>
                <p className='name'>Victor Fuentes</p>
                <p className='name'>Eduardo Torres</p>
                <p className='name'>Benjamin Gonzalez</p>
            </div>
            <div className='footer2'>
            <Footer />
            </div>
        </div>
        
    
 );
};

export default About
