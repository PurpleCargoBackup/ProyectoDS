import React from 'react';
import '../styles/About.css';


const About = () => {
    
 

 

 return (
    <div className="about-us">
            <h1>Sobre Nosotros</h1>
            <h2>¡Bienvenidos a nuestra página!</h2>
            <p>Nuestro enfoque para este trabajo es poder facilitar la compra de distintos articulos para la gente y que se vea de una forma amigable para el comprador.</p>
            <p>Aqui tienen unas imagenes de los creadores:</p>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <img src=".\imagenes\victor.jpg" alt="photo1" style={{ width: '15%', height: 'auto', borderRadius: '50%' }} />
                <img src=".\imagenes\eduardo.jpg" alt="photo2" style={{ width: '15%', height: 'auto', borderRadius: '50%' }} />
                <img src=".\imagenes\victor.jpg" alt="photo3" style={{ width: '15%', height: 'auto', borderRadius: '50%' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',  marginTop: '1rem', textAlign: 'center' }}>
                <p className='name'>Victor Fuentes</p>
                <p className='name'>Eduardo Torres</p>
                <p className='name'>Benjamin Gonzalez</p>
            </div>
        </div>
    
 );
};

export default About
