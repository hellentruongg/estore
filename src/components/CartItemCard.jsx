import { Button } from "flowbite-react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";

export default function CartItemCard({ cartItem }) {
  return (
    <>
      <img src="#" alt="" />
      <p>Product</p>

      <br />

      <p>Color</p>

      <br />

      <p>Size</p>

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

      <p>Price</p>
    </>
  );
}
