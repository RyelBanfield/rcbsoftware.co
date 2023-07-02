import { Button } from "./ui/button";

const Header = () => {
  return (
    <header>
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
