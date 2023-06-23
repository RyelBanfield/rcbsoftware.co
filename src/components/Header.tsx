import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn-ghost btn hover:bg-base-100 sm:hidden"
          >
            <Bars3BottomLeftIcon className="h-5 w-5" />
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu menu-sm z-[1] mt-3 w-52 rounded-md bg-base-100 p-2 shadow"
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
          <div className="relative h-12 w-12">
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
        <a className="btn-ghost btn hover:bg-base-100">Contact Us</a>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header>
      <Nav />

      <div className="hero mx-auto bg-primary px-4 py-16 text-base-100">
        <div className="hero-content">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold">
              Impactful software solutions.
            </h1>
            <p className="py-9">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn-secondary btn">Contact Us</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
