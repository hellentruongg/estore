import { useRecoilState } from "recoil";
import { cartState } from "../states/cart";
import CartItemCard from "../components/CartItemCard";

export default function CartPage() {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <>
      {cart.length === 0 && <h1>Your shopping cart is empty</h1>}
      <section>
        {cart.map((cartItem) => {
          return (
            <CartItemCard
              key={cartItem.product.id + cartItem.size}
              cartItem={cartItem}
            />
          );
        })}
      </section>
    </>
  );
}
