import { Card, Button, Spinner } from "flowbite-react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { clothesState } from "../states/clothes";
import { useState } from "react";
import { cartState } from "../states/cart";

export default function ProductViewPage() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [clothes, setClothes] = useRecoilState(clothesState);
  const [cart, setCart] = useRecoilState(cartState);
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("");
  const [selectedSize, setSelectedSize] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      <Button key={size} onClick={() => handleSize(size)} outline color="gray">
        {size}
      </Button>
    );
  }

  function handleSize(size) {
    setSize(size);
    setSelectedSize(true);
    setErrorMessage("");
  }

  function addToCart() {
    if (!selectedSize) {
      setErrorMessage("Please select a size before adding to cart.");
      return;
    }

    const newCartItem = {
      product: product,
      size: size,
      amount: 1,
    };

    const foundCartItem = cart.find(
      (item) => item.product.id === product.id && item.size === size
    );

    if (foundCartItem) {
      setCart(
        cart.map((item) => {
          if (item !== foundCartItem) {
            return item;
          } else {
            return { ...item, amount: item.amount + 1 };
          }
        })
      );
    } else {
      setCart([...cart, newCartItem]);
    }
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

        <p className="text-l text-gray-900 dark:text-gray-400">
          {selectedSize ? `Chosen size: ${size}` : "Choose size:"}
        </p>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => createSizeButton(size))}
        </div>
        <Button onClick={addToCart}>Add to cart</Button>
      </Card>
    </>
  );
}
