import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";
import { cn } from "@/utils/utils";
import { navigation } from "@/config/navigation";

const social: {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
  disable: boolean;
}[] = [
  {
    name: "Facebook",
    href: siteConfig.links.facebook,
    disable: true,
    icon: (props: React.SVGProps<SVGSVGElement>) => <BsFacebook {...props} />,
  },
  {
    name: "Instagram",
    href: siteConfig.links.instagram,
    disable: true,
    icon: (props: React.SVGProps<SVGSVGElement>) => <BsInstagram {...props} />,
  },
  {
    name: "Twitter",
    href: siteConfig.links.twitter,
    disable: true,
    icon: (props: React.SVGProps<SVGSVGElement>) => <BsTwitter {...props} />,
  },
  {
    name: "GitHub",
    href: siteConfig.links.github,
    disable: true,
    icon: (props: React.SVGProps<SVGSVGElement>) => <BsGithub {...props} />,
  },
  {
    name: "YouTube",
    href: siteConfig.links.youtube,
    disable: true,
    icon: (props: React.SVGProps<SVGSVGElement>) => <BsYoutube {...props} />,
  },
];

const Item = (props: { name: string; href: string; disable: boolean }) => (
  <li>
    <a
      href={props.href}
      className={cn(
        "text-sm leading-6 text-foreground/60 hover:text-foreground/80",
        props.disable && "pointer-events-none"
      )}
    >
      {props.name}
    </a>
  </li>
);

const Footer: React.FC = () => {
  const description = "";

  return (
    <footer className="bg-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-7"
              src={"/favicon/origin.png"}
              alt="logo"
              width={28}
              height={28}
            />
            <p className="text-sm leading-6 text-foreground/60">
              {description}
            </p>
            <div className="flex space-x-6">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    item.disable && "pointer-events-none",
                    "text-foreground/60 hover:text-foreground/80"
                  )}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Shop
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.shop.map((item) => (
                    <Item key={item.name} {...item} />
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <Item key={item.name} {...item} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Account
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.account.map((item) => (
                    <Item key={item.name} {...item} />
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">
                  Connect
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.connect.map((item) => (
                    <Item key={item.name} {...item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-ring/60 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-foreground/60">
            © {new Date().getFullYear()} {siteConfig.name} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
