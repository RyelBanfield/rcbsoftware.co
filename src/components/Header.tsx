import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="bg-light py-12 text-dark sm:py-24">
      <section className="hero">
        <div className="hero-content max-w-3xl px-3 py-0 xs:px-6 sm:px-9 md:px-12 md:text-center">
          <div>
            <h1 className="mb-6 text-6xl font-bold">
              Unlock Your Digital Potential.
            </h1>

            <p className="mb-6 font-medium">
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
      </section>
    </header>
  );
};

export default Header;
