import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import { countState } from "../states/count";

export default function CartLayout() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <>
      <header>
        <h1 className="text-4xl">Shopping Cart ({count} items)</h1>
      </header>

      <br />

      <Outlet />
    </>
  );
}
