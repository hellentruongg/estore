import { Card } from "flowbite-react";

export default function ProductCard() {
  return (
    <>
      <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/images/blog/image-1.jpg"
      >
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">$599</p>
      </Card>
    </>
  );
}
