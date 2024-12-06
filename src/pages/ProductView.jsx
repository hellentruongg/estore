import { Card, Button, Spinner } from "flowbite-react";
import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { clothesState } from "../states/clothes";
import { useState } from "react";

export default function ProductViewPage() {
  // OBS! useParams has to be used within a route with a path that has a dynamic parameter.

  // 1.  use useParams in the ProductViewPage and then find the the id that match the url id
  // 2. display the product information

  Link;

  const { id } = useParams();
  const { pathname } = useLocation();
  const [clothes, setClothes] = useRecoilState(clothesState);
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("Choose size:");

  useEffect(() => {
    if (pathname === "/clothes/" + id) {
      const garment = clothes.find((garment) => garment.id === parseInt(id));

      if (garment) {
        setProduct(garment);
      }

      // } else if (pathname === "/shoes/" + id) {
      //     //code here
      // } else if (pathname === "/accessories/" + id) {
      //     // code here
    }
  }, [id, clothes]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner aria-label="Loading" size="xl" />
      </div>
    );
  }

  const { title, price, color, sizes, image } = product;

  function createSizeButton(size) {
    return (
      // varje knapp har en onClick funktion som får props (size)
      // onClick funktionen ändrar texten "choose size:" (se nedan)
      <Button onClick={() => displaySize(size)} outline color="gray">
        {size}
      </Button>
    );
  }

  function displaySize(size) {
    setSize(`Chosen size: ${size}`);
  }

  return (
    <>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={image}
      >
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          €{price}
        </p>

        <p className="text-l text-gray-900 dark:text-gray-400">
          Color: <span>{color}</span>
        </p>
        <div>color</div>
        {/* När man väljer storlek: ändra "choose size:" till "chosen size:" och lägg till vald storlek. Ex. Chosen size: XS. */}
        <p className="text-l text-gray-900 dark:text-gray-400">{size}</p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => createSizeButton(size))}
        </div>
        <Button>Add to cart</Button>
      </Card>
    </>
  );
}
