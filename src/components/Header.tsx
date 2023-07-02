"use client";

import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "./ui/button";

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-dark p-3 text-light">
        <div className="navbar-start">
          <Link href="/">
            <div className="relative h-12 w-24 cursor-pointer">
              <Image
                src="/logo.svg"
                alt="RCB Software Logo"
                fill
                className="cursor-pointer"
                priority
              />
            </div>
          </Link>
        </div>

        <div className="navbar-end">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Web Development
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      <div className="hero bg-light py-12 text-dark">
        <div className="hero-content px-6">
          <div>
            <h1 className="text-6xl font-bold">
              Unlock Your Digital Potential.
            </h1>

            <p className="py-9 font-medium">
              Crafting <span className="font-bold text-red">Innovative</span>{" "}
              and{" "}
              <span className="font-bold text-red">
                Impactful Software Solutions
              </span>{" "}
              for the Modern World by combining cutting-edge technology and
              creative expertise to build exceptional web solutions tailored to
              your business needs.
            </p>

            <Button size={"lg"} asChild>
              <a href="#contact_form">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
