import { Card, Button } from "flowbite-react";

export default function ProductViewPage() {
  // OBS! useParams has to be used within a route with a path that has a dynamic parameter.

  // 1.  use useParams in the ProductViewPage and then find the the id that match the url id
  // 2. display the product information

  // function createSizeButton(size) {
  //   return (
  //     <Button outline color="gray">
  //       {size}
  //     </Button>
  //   );
  // }

  return (
    <>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="#"
      >
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Title
        </h5>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          € Price
        </p>

        <p className="text-l text-gray-900 dark:text-gray-400">
          Color: <span>Color Name</span>
        </p>
        <div>color</div>
        {/* När man väljer storlek: ändra "choose size:" till "chosen size:" och lägg till vald storlek. Ex. Chosen size: XS. */}
        <p className="text-l text-gray-900 dark:text-gray-400">Choose size:</p>
        <div className="flex flex-wrap gap-2">
          {/* {garment.sizes.map((size) => createSizeButton(size))} */}
        </div>
        <Button>Add to cart</Button>
      </Card>
    </>
  );
}
