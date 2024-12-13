import { Button } from "flowbite-react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { cartState } from "../states/cart";

export default function CartItemCard({ cartItem }) {
  const { id, title, price, color, image } = cartItem.product;
  const { size, amount } = cartItem;

  console.log(amount);

  const [cart, setCart] = useRecoilState(cartState);

  const foundCartItem = cart.find(
    (item) => item.product.id === id && item.size === size
  );

  function increaseAmount() {
    setCart(
      cart.map((item) => {
        if (item.product.id === id && item.size === size) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      })
    );
  }

  function decreaseAmount() {
    if (foundCartItem.amount <= 1) {
      setCart(
        cart.filter((item) => !(item.product.id === id && item.size === size))
      );
    } else {
      setCart(
        cart.map((item) => {
          if (item.product.id === id && item.size === size) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        })
      );
    }
  }

  return (
    <>
      <img src={image} alt="" />
      <p>{title}</p>

      <br />

      <p>{color}</p>

      <br />

      <p>{size}</p>

      <br />

      <div className="flex gap-2">
        <Button onClick={decreaseAmount} size="xs" outline color="gray">
          <BsDashLg />
        </Button>
        <span>{amount}</span>
        <Button onClick={increaseAmount} size="xs" outline color="gray">
          <BsPlusLg />
        </Button>
      </div>

      <br />

      <p>€{price}</p>
    </>
  );
}
