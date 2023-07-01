import {
  AcademicCapIcon,
  CodeBracketIcon,
  FaceSmileIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Expertise",
    description:
      "Our team of skilled developers is well-versed in the latest web technologies and industry best practices. With a wealth of experience, we deliver software solutions that are not only visually stunning but also perform flawlessly.",
    icon: AcademicCapIcon,
  },
  {
    name: "Collaboration",
    description:
      "We believe in fostering strong partnerships with our clients. We value your input throughout the development process, ensuring that your vision is brought to life and your goals are achieved.",
    icon: UserGroupIcon,
  },
  {
    name: "Innovation",
    description:
      "We thrive on innovation and continuously push the boundaries of what's possible in the digital landscape. We stay up-to-date with emerging trends and technologies, so you can trust us to provide you with forward-thinking solutions that give you a competitive edge.",
    icon: CodeBracketIcon,
  },
  {
    name: "Customer Satisfaction",
    description:
      "Our commitment to your satisfaction is unwavering. We prioritize open communication and transparency throughout the development process, ensuring that your project is delivered on time and within budget. Your success is our ultimate goal, and we go above and beyond to ensure that you are thrilled with the results.",
    icon: FaceSmileIcon,
  },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-dark py-12 text-light">
      <div className="px-6">
        <div>
          <h2 className="text-base font-semibold leading-7 text-red">
            What We Offer
          </h2>

          <p className="mt-3 text-3xl font-bold tracking-tight text-gray sm:text-4xl">
            Modern Web Development Services
          </p>

          <p className="mt-6 text-lg leading-8">
            Harness the power of the internet with our expert web development
            services. From eye-catching websites to feature-rich web
            applications, our team leverages the latest technologies to build
            dynamic and user-friendly digital experiences that captivate your
            audience.
          </p>

          <p className="mt-6 text-lg leading-8">
            We understand that selecting the right partner for your web
            development needs is a crucial decision. With numerous options
            available in the market, it&apos;s important to choose a company
            that not only delivers exceptional results but also understands your
            unique business requirements. Here&apos;s why RCB Software stands
            out from the crowd:
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <div className="text-base font-semibold leading-7 text-gray">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  {feature.name}
                </div>

                <div className="mt-2 text-base leading-7">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
