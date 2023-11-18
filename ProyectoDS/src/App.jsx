import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Store from "./pages/Store"
import ProductPage from "./pages/ProductPage"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/store" element={<Store />} />
        <Route path="products/:id" element={<ProductPage />} />
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App
