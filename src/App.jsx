import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/Root";
import ClothesPage from "./pages/Clothes";
import ShoesPage from "./pages/Shoes";
import AccessoriesPage from "./pages/Accessories";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import ProductCard from "./components/ProductCard"; //ta bort sen

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {/* Layout
        - header komponent (skicka props för att ändra header information dynamiskt)
        - 
        */}
        <Route path="clothes" element={<ClothesPage />} />
        <Route path="shoes" element={<ShoesPage />} />
        <Route path="accessories" element={<AccessoriesPage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
      <ProductCard />
    </>
  );
}

export default App;
