import { siteConfig } from "@/config/site";
import Image from "next/image";
import React from "react";

type HeroProps = {
  title: string;
  description: string;
  prompt: string;
  imageSrc: string;
};

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className="relative bg-background">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <Image
              className="h-11"
              src="/favicon/origin.png"
              alt={siteConfig.name}
              width={44}
              height={44}
            />
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-foreground sm:mt-10 sm:text-6xl">
              {props.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/60">
              {props.description}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {props.prompt}
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-background object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={props.imageSrc}
            alt="banner image"
            width={1232}
            height={928}
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
