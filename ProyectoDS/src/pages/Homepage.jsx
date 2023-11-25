import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Homepage.css';
import Footer from '../components/Footer';

function Homepage() {
 return (
    <div className="App">
      <header className="App-header">
        <h1>Tienda The Bois</h1>
        <nav>
          <ul className='store'>
            <li>
              
              <Link to="/store">Tienda</Link>
              
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="commercial-center">
          <img src="/imagenes/mall.jpg" alt="Commercial Center" />
        </div>
      </main>
      <Footer />
    </div>
 );
}

export default Homepage;