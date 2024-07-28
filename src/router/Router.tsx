import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import PageNotFound from "../pages/404";

function Router() {
  return (
    <Routes>
        <Route
         index 
         element={<Home />} 
        />
        <Route
         path="/about" 
         element={<About />} 
        />
        <Route
         path="shop" 
         element={<Shop />} 
        />
        <Route
         path="*" 
         element={<PageNotFound />} 
        />
    </Routes>
  )
}

export default Router