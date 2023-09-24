import Image from "next/image";
import Link from "next/link";
import React from "react";

type CategoryPreviewsProps = {};

const CategoryPreviews: React.FC<CategoryPreviewsProps> = () => {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Shop by Category
          </h2>
          <Link
            href="/products"
            className="hidden text-sm font-semibold text-accent/60 hover:text-accent/80 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src="/images/600x600.png"
              alt="New arrivals"
              className="object-cover object-center group-hover:opacity-75"
              width={600}
              height={600}
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-foreground relative">
                  <Link href="/news">
                    <span className="absolute inset-0" />
                    New Arrivals
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-foreground">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              src="/images/600x600.png"
              alt="Accessories"
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              width={600}
              height={600}
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-foreground relative">
                  <Link href="/accessories">
                    <span className="absolute inset-0" />
                    Accessories
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-foreground">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <Image
              src="/images/600x600.png"
              alt="Clothing"
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              width={600}
              height={600}
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-foreground relative">
                  <Link href="/clothing">
                    <span className="absolute inset-0" />
                    Clothing
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-foreground">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="/products"
            className="block text-sm font-semibold text-accent/60 hover:text-accent/80"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default CategoryPreviews;
