import { Button } from "flowbite-react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";

export default function CartItemCard({ cartItem }) {
  const { title, price, color, sizes, image } = cartItem.product;

  return (
    <>
      <img src={image} alt="" />
      <p>{title}</p>

      <br />

      <p>{color}</p>

      <br />

      {sizes.map((size) => (
        <p>{size}</p>
      ))}

      <br />

      <div className="flex gap-2">
        {/* styla knappstorleken, båda ska vara lika stora i bredd och höjd */}
        <Button size="xs" outline color="gray">
          <BsDashLg />
        </Button>
        <span>X</span>
        <Button size="xs" outline color="gray">
          <BsPlusLg />
        </Button>
      </div>

      <br />

      <p>€{price}</p>
    </>
  );
}
