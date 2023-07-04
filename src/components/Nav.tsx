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

const Nav = () => {
  return (
    <nav className="navbar bg-dark p-3 text-light xs:px-6 sm:px-9 md:px-12 md:py-6">
      <div className="navbar-start">
        <Link href="/">
          <div className="relative h-9 w-16 cursor-pointer">
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
                <Link href="/company/about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>

              <NavigationMenuContent>
                <Link href="/services/web-development" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Web Development
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Nav;
