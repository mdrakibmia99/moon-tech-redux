import { RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './routes/routes'
import ProductProvider from './context/ProductProvider'

function App() {


  return (
    <ProductProvider>

      <RouterProvider router={routes} ></RouterProvider>
    </ProductProvider>
  )
}

export default App
