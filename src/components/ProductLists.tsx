import Image from "next/image";
import Link from "next/link";
import React from "react";

type Product = {
  id: number;
  name: string;
  color: string;
  price: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

type ProductListsProps = {
  products: Product[];
};

const ProductLists: React.FC<ProductListsProps> = ({ products }) => {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Trending products
          </h2>
          <Link
            href="/products"
            className="hidden text-sm font-medium text-accent/60 hover:text-accent/80 md:block"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-card group-hover:opacity-75 lg:h-72 xl:h-80">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-foreground/90">
                <Link href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-foreground/60">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <Link
            href="/products"
            className="font-medium text-accent/60 hover:text-accent/80"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductLists;
