import React from "react"
import { Routes, Route} from "react-router-dom"
import { Home } from "./pages/home/home"
import { About } from "./pages/about/about"
import { Shop } from "./pages/shop/shop"
import { ProductDetail } from "./components/product-detail/product-detail"

function App() {

  return (
    <>
    <Routes>
   
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/product/:slug" element={<ProductDetail/>}/>
    </Routes>
    </>
  )
}

export default App
