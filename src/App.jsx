
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/header.components";
import Product from "./pages/product";
import Home from "./pages/home";
import products from "./db/products.json"

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Header />,
      children : [
        {
          path : "/",
          element : <Home />,
          loader:({})=> products
        },
        {
          path : "product/:id",
          element : <Product />,
          loader:({params})=> products.find(product=> product._id == params.id)
        }
      ]

    }
  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App
