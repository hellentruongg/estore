import { useRecoilState } from "recoil";
import { cartState } from "../states/cart";
import { Outlet } from "react-router-dom";

export default function CartLayout() {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <>
      <header>
        <h1 className="text-4xl">Shopping Cart</h1>
      </header>

      <Outlet />
    </>
  );
}
