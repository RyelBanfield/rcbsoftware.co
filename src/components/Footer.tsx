import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light">
      <div className="w-full p-6">
        <div>
          <Link href="/" className="mb-4 flex items-center sm:mb-0">
            <div className="relative h-12 w-24">
              <Image
                src="/logo.svg"
                className="mr-3 h-8"
                alt="RCB Software Logo"
                fill
              />
            </div>
          </Link>

          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
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
