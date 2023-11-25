import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Store from "./pages/Store"
import ProductPage from "./pages/ProductPage"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/store/*" element={<Store />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </ShoppingCartProvider>
  )
}

export default App
