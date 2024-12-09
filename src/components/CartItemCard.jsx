import { Button } from "flowbite-react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";

export default function CartItemCard({ cartItem }) {
  const { title, price, color, image } = cartItem.product;
  const { size, amount } = cartItem;

  console.log(amount);

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
        {/* styla knappstorleken, båda ska vara lika stora i bredd och höjd */}
        <Button size="xs" outline color="gray">
          <BsDashLg />
        </Button>
        <span>{amount}</span>
        <Button size="xs" outline color="gray">
          <BsPlusLg />
        </Button>
      </div>

      <br />

      <p>€{price}</p>
    </>
  );
}
