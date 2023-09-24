import CategoryPreviews from "@/components/CategoryPreviews";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ProductLists from "@/components/ProductLists";
import { dummyProducts } from "@/test/Products";

const hero = {
  title: "Unleash Your Potential",
  description:
    "Discover our high-quality sportswear and running shoes, designed to empower your performance and elevate your style. Our products combine innovation, comfort, and design, providing you with the ultimate sports experience.",
  prompt: "Start Shopping Now",
  imageSrc: "/images/magic.png",
};

async function getProducts() {
  return dummyProducts;
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <Navigation />
      <main>
        <Hero {...hero} />
        <ProductLists products={products} />
        <CategoryPreviews />
        <Footer />
      </main>
    </div>
  );
}
