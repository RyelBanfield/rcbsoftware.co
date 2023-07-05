import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light">
      <div className="mx-auto max-w-7xl p-3 xs:px-6 sm:px-9 md:px-12 md:py-6">
        <div>
          <Link href="/" className="flex items-center sm:mb-0">
            <div className="relative mb-6 h-12 w-24">
              <Image
                src="/logo.svg"
                className="h-8"
                alt="RCB Software Logo"
                fill
              />
            </div>
          </Link>

          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium">
            <li>
              <a
                href="/company/about-us"
                className="mr-4 hover:underline md:mr-6 "
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/services/web-development"
                className="mr-4 hover:underline md:mr-6"
              >
                Our Web Development Services
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6" />

        <span className="block text-sm">
          © {currentYear}{" "}
          <Link href="/" className="hover:underline">
            RCB Software LLC
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
