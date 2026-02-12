import React from 'react'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products/>}></Route>
        <Route path="/services/:id" element={<ProductDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App