import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar bg-dark py-4 text-light">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn sm:hidden">
            <Bars3BottomLeftIcon className="h-5 w-5" />
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu menu-sm z-[1] mt-6 w-52 rounded-md bg-dark p-2"
          >
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <Link href="/">
          <div className="relative h-12 w-20">
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

      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn">Contact Us</a>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <Nav />

      <div className="hero mx-auto bg-light px-4 py-16 text-dark">
        <div className="hero-content">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold">
              Unlock Your Digital Potential.
            </h1>

            <p className="py-9">
              Crafting Innovative and Impactful Software Solutions for the
              Modern World.
            </p>

            <p className="pb-9">
              Welcome to RCB Software, where we combine cutting-edge technology
              and creative expertise to build exceptional web solutions tailored
              to your business needs. Whether you&apos;re an established
              enterprise or a budding startup, our team of skilled developers is
              here to transform your digital vision into reality.
            </p>

            <button className="btn bg-red text-light">Contact Us</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
