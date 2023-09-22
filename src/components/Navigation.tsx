"use client";

import { siteConfig } from "@/config/site";
import ShoppingBag from "@/icons/shopping-bag";
import Image from "next/image";
import React, { Fragment } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { Popover, Transition } from "@headlessui/react";
import { cn } from "@/utils/utils";

const Navigation: React.FC = () => {
  return (
    <div className="bg-background">
      <header className="relative bg-background">
        <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="border-b border-ring px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1">
                <a href="#">
                  <span className="sr-only">{siteConfig.name}</span>
                  <Image
                    className="h-8 w-auto"
                    src={"/favicon/origin.png"}
                    alt="logo"
                    width={100}
                    height={100}
                    priority
                  />
                </a>
              </div>
              {/* Menus */}
              <Popover.Group className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                  {/* 1 */}
                </div>
              </Popover.Group>

              <div className="flex flex-1 items-center justify-end">
                {/* Dark mode */}
                <div className="p-2 text-foreground/60 group-hover:text-foreground/80 cursor-pointer">
                  <span className="sr-only">dark mode</span>
                  <ThemeSwitcher />
                </div>
                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-8">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBag className="flex-shrink-0 text-foreground/60 group-hover:text-foreground/80" />
                    <span className="ml-2 text-sm font-medium text-foreground/60 group-hover:text-foreground/80">
                      0
                    </span>
                    <span className="sr-only">view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Navigation;
