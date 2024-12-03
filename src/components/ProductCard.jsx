import { Card, Button } from "flowbite-react";

export default function ProductCard({ garment }) {
  // function navigateToProductView() {
  //   // OBS! useParams has to be used within a route with a path that has a dynamic parameter.
  //   // Option A:
  //   // 1. use useParams in the ClothesPage and then pass props (params) to the ProductCard.
  //   // 2. use useNavigate to navigate to the ProductViewPage
  //   // Option B:
  //   // 1.  use useParams in the ProductViewPage and the find the the id that match the url id
  //   // 2. display the product information
  // }

  return (
    <>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={garment.image}
      >
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {garment.title}
        </h5>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          €{garment.price}
        </p>
      </Card>
    </>
  );
}
