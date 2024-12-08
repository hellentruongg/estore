import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/Root";
import ClothesLayout from "./layout/Clothes";
import CartLayout from "./layout/Cart";
import ClothesPage from "./pages/Clothes";
import ShoesPage from "./pages/Shoes";
import AccessoriesPage from "./pages/Accessories";
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import ProductViewPage from "./pages/ProductView";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {/* 
        - skapa layout för ClothesPage, ShoesPage och AccessoriesPage
        - header komponent (skicka props för att ändra header information dynamiskt)
        - 
        */}

        <Route path="clothes" element={<ClothesLayout />}>
          <Route index element={<ClothesPage />} />
          <Route path=":id" element={<ProductViewPage />} />
        </Route>
        <Route path="shoes" element={<ShoesPage />} />
        <Route path="accessories" element={<AccessoriesPage />} />
        <Route path="cart" element={<CartLayout />}>
          <Route index element={<CartPage />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
