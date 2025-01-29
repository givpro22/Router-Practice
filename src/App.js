import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error from "./pages/Error";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/products', element: <Products/> }
    ]
  },
 
])


function App() {
  return (

    <RouterProvider router={router}/>

  );
}

export default App;
