import { Button } from "flowbite-react";
import { useRecoilState } from "recoil";
import { cartState } from "../states/cart";
import CartItemCard from "../components/CartItemCard";

export default function CartPage() {
  const [cart, setCart] = useRecoilState(cartState);

  const shippingFee = 5;

  const subTotal = cart.reduce((accumulator, item) => {
    return accumulator + item.amount * item.product.price;
  }, 0);

  const totalPrice = subTotal + shippingFee;

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
      <br />
      <section>
        <p>Subtotal: {subTotal}</p>
        <p>Shipping: €{shippingFee}</p>
        <p>Total: €{totalPrice}</p>
        <br />
        <Button>Continue to checkout</Button>
      </section>
    </>
  );
}
