import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import {Home} from './components/Home'
import {Basket} from './components/Basket'
import {Products} from './components/Products'
import {Product} from './components/Product'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}>
          <Route index element={<Products></Products>}></Route>
          <Route path="*" element={<Products></Products>}></Route>
          <Route path="products" element={<Products></Products>}></Route>
          <Route path="product/:id" element={<Product></Product>}></Route>
          <Route path="basket" element={<Basket></Basket>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
