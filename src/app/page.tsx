import Navigation from "@/components/Navigation";
import Image from "next/image";

const hero = {
  title: "Unleash Your Potential",
  description:
    "Discover our high-quality sportswear and running shoes, designed to empower your performance and elevate your style. Our products combine innovation, comfort, and design, providing you with the ultimate sports experience.",
  prompt: "Start Shopping Now",
};

export default function Home() {
  return (
    <div>
      <Navigation />
      <main>
        {/* Hero */}
        <div className="flex flex-col border-b border-ring lg:border-0">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 bg-background lg:block"
            />
            <div className="relative bg-background lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl">
                      {hero.title}
                    </h1>
                    <p className="mt-4 text-xl text-foreground/60">
                      {hero.description}
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-primary px-8 py-3 font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        {hero.prompt}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <Image
                src=""
                className="h-full w-full object-cover object-center"
                alt="banner"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
