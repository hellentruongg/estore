import { Button, Spinner } from "flowbite-react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { clothesState } from "../states/clothes";
import { useState } from "react";
import { cartState } from "../states/cart";
import { countState } from "../states/count";

export default function ProductViewPage() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [clothes, setClothes] = useRecoilState(clothesState);
  const [cart, setCart] = useRecoilState(cartState);
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("");
  const [selectedSize, setSelectedSize] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [count, setCount] = useRecoilState(countState);

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

  useEffect(() => {
    updateCartCount();
  }, [cart]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner aria-label="Loading" size="xl" />
      </div>
    );
  }

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

  const { title, price, color, sizes, image } = product;

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

  function updateCartCount() {
    const totalAmount = cart.reduce((accumulator, item) => {
      return accumulator + item.amount;
    }, 0);

    console.log(totalAmount);

    setCount(totalAmount);
  }

  const circle = {
    height: "25px",
    width: "25px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block",
  };

  return (
    <>
      <article className="flex gap-x-10 justify-center">
        <img src={image} alt="product image" className="" />

        <section className="flex flex-col gap-y-6">
          <header>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              €{price}
            </p>
          </header>

          <div>
            <p className="text-l text-gray-900 dark:text-gray-400">
              Color: <span>{color}</span>
            </p>
            <span style={circle}></span>
          </div>

          <div>
            <p className="text-l text-gray-900 dark:text-gray-400">
              {selectedSize ? `Chosen size: ${size}` : "Choose size:"}
            </p>

            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => createSizeButton(size))}
            </div>
          </div>

          <Button onClick={addToCart}>Add to cart</Button>
        </section>
      </article>
    </>
  );
}
