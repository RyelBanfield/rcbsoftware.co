import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <>
      <article className="prose bg-light px-6 py-12 text-dark">
        <h1 className="text-dark">About RCB Software </h1>

        <p>
          At RCB Software, we are passionate about creating innovative software
          solutions that empower businesses to thrive in the digital age. Led by
          Ryel Banfield, an experienced and talented developer, our team is
          dedicated to delivering cutting-edge technology and exceptional
          results.
        </p>

        <section>
          <h2 className="text-dark">Our Mission</h2>
          <p>
            Our mission is simple: to transform your ideas into reality through
            custom software development. We believe that technology has the
            power to revolutionize businesses, streamline processes, and enhance
            user experiences. With this vision in mind, we work closely with our
            clients to understand their unique requirements and build tailored
            solutions that exceed their expectations.
          </p>
        </section>

        <section>
          <h2 className="text-dark">Expertise and Innovation</h2>
          <p>
            With years of industry experience, Ryel Banfield leads our team of
            skilled professionals in harnessing the latest technologies and
            industry best practices. We are constantly pushing the boundaries of
            what&apos;s possible, staying ahead of the curve to deliver
            solutions that are not only functional but also innovative.
          </p>
        </section>

        <section>
          <h2 className="text-dark">Collaborative Approach</h2>
          <p>
            We strongly believe that successful software development is a
            collaborative process. We value open communication and work closely
            with our clients to ensure that their vision is realized. From
            initial concept to final implementation, we involve our clients
            every step of the way, providing transparency, flexibility, and the
            opportunity for valuable feedback.
          </p>
        </section>

        <section>
          <h2 className="text-dark">Tailored Solutions</h2>
          <p>
            At RCB Software, we understand that every business is unique, with
            its own set of challenges and goals. That&apos;s why we don&apos;t
            believe in one-size-fits-all solutions. Instead, we take the time to
            listen, analyze, and strategize, tailoring our services to your
            specific needs. Whether you require a robust web application, a
            mobile app, or a complex enterprise solution, we have the expertise
            to deliver.
          </p>
        </section>

        <section>
          <h2 className="text-dark">Client Satisfaction</h2>
          <p>
            Client satisfaction is at the heart of everything we do. We measure
            our success by the success of our clients. Our commitment to
            quality, attention to detail, and unwavering dedication ensure that
            we not only meet but exceed expectations. We value long-term
            partnerships and strive to become your trusted technology partner,
            supporting your growth and evolution every step of the way.
          </p>
        </section>

        <section>
          <h2 className="text-dark">Let&apos;s Get Started</h2>
          <p>
            Are you ready to unlock the full potential of technology for your
            business? Contact us today, and let&apos;s embark on a journey of
            innovation and growth together. We are excited to hear about your
            project and discuss how RCB Software can help you achieve your
            goals.
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

export default AboutUs;
