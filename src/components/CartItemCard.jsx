import { Button } from "flowbite-react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";

export default function CartItemCard({ cartItem }) {
  const { title, price, color, image } = cartItem.product;
  const { size, amount } = cartItem;

  console.log(amount);

  // Uppgift 0
  // hämta global variabel "cart"

  // Uppgift 1
  // om det är mer av samma produkt + storlek, visa summan

  // Uppgift 2
  // koppla en onClick-funktion till "minus" knappen
  // om produken har en amount som är mindre än 0, ta bort produkten (mha filter)
  // mappa genom "cart" och om produkten finns (kontrollera med id + storlek), minska på antalet, annars returnera produkten

  //Uppgift 3
  // koppla en onClick-funktion till "plus" knappen
  // mappa genom "cart" och om produkten finns (kontrollera med id + storlek), öka på antalet, annars returnera produkten

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
