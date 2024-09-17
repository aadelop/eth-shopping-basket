import { StrictMode, useState, createContext  } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import './index.css'
import {Home} from './components/Home'
import {Basket} from './components/Basket'
import {Products} from './components/Products'
import {Product} from './components/Product'

const queryClient = new QueryClient();
export const Context = createContext(null)

function App() {

    const [bstate, setBstate] = useState({
         basket: []
    })
    return <Context.Provider value={[bstate, setBstate]} >
        <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
  </Context.Provider>
  
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
