import { Button } from "@/components/ui/button";

const WebDevelopment = () => {
  return (
    <>
      <article className="prose bg-light px-6 py-12 text-dark">
        <section>
          <h1 className="text-dark">Our Web Development Services</h1>
          <p>
            At RCB Software, we offer comprehensive web development services
            designed to elevate your online presence and drive your business
            forward. With a team of skilled developers and a commitment to
            excellence, we deliver custom web solutions that are tailored to
            your specific needs.
          </p>
        </section>

        <section>
          <h2 className="text-dark">What We Provide</h2>
          <ul>
            <li className="marker:text-dark">
              <a href="#web-development" className="text-dark hover:text-red">
                Web Design and Development
              </a>
            </li>
            <li className="marker:text-dark">
              <a
                href="#responsive-web-design"
                className="text-dark hover:text-red"
              >
                Responsive Web Design
              </a>
            </li>
            <li className="marker:text-dark">
              <a
                href="#content-management-systems"
                className="text-dark hover:text-red"
              >
                Content Management Systems (CMS)
              </a>
            </li>
            <li className="marker:text-dark">
              <a
                href="#e-commerce-solutions"
                className="text-dark hover:text-red"
              >
                E-commerce Solutions
              </a>
            </li>
            <li className="marker:text-dark">
              <a
                href="#custom-web-applications"
                className="text-dark hover:text-red"
              >
                Custom Web Applications
              </a>
            </li>
          </ul>
        </section>

        <section id="web-development">
          <h3 className="text-dark">Web Design and Development</h3>
          <p>
            We specialize in creating visually stunning and user-friendly
            websites that leave a lasting impression. From engaging landing
            pages to dynamic e-commerce platforms, we have the expertise to
            bring your vision to life.
          </p>
        </section>

        <section id="responsive-web-design">
          <h3 className="text-dark">Responsive Web Design</h3>
          <p>
            In today&apos;s mobile-first world, it&apos;s crucial to have a
            website that seamlessly adapts to different screen sizes. We ensure
            that your website looks and functions flawlessly on all devices,
            providing an exceptional user experience across the board.
          </p>
        </section>

        <section id="content-management-systems">
          <h3 className="text-dark">Content Management Systems (CMS)</h3>
          <p>
            Take control of your website with a robust and intuitive content
            management system. We work with popular CMS platforms like
            WordPress, Drupal, and Joomla to empower you to easily update and
            manage your website&apos;s content.
          </p>
        </section>

        <section id="e-commerce-solutions">
          <h3 className="text-dark">E-commerce Solutions</h3>
          <p>
            Ready to sell your products or services online? We develop secure
            and scalable e-commerce platforms that streamline your sales
            process, enhance customer experience, and drive conversions.
          </p>
        </section>

        <section id="custom-web-applications">
          <h3 className="text-dark">Custom Web Applications</h3>
          <p>
            From customer portals to online booking systems, we build
            tailor-made web applications that address your unique business
            requirements. Our solutions are scalable, efficient, and built to
            grow with your business.
          </p>
        </section>

        <section>
          <h3 className="text-dark">Get Started Today</h3>
          <p>
            Ready to take your online presence to new heights? Contact us today
            to discuss your web development project. We&apos;re excited to
            collaborate with you and deliver a website that sets you apart from
            the competition.
          </p>

          <Button size={"lg"} asChild className="mt-6 w-full">
            <a href="/#contact_form" className="no-underline">
              Contact Us
            </a>
          </Button>
        </section>
      </article>
    </>
  );
};

export default WebDevelopment;
