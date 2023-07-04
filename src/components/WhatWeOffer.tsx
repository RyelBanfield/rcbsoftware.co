import {
  AcademicCapIcon,
  CodeBracketIcon,
  FaceSmileIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    name: "Expertise",
    description:
      "Our team of skilled developers is well-versed in the latest web technologies and industry best practices. We deliver software solutions that are not only visually stunning but also perform flawlessly.",
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
      "We continuously push the boundaries of what's possible in the digital landscape. We stay up-to-date with emerging trends and technologies, so you can trust us to provide you with forward-thinking solutions.",
    icon: CodeBracketIcon,
  },
  {
    name: "Customer Satisfaction",
    description:
      "We prioritize communication throughout development, ensuring that your project is delivered on time and within budget. Your success is our goal, and we ensure that you are thrilled with the results.",
    icon: FaceSmileIcon,
  },
];

const WhatWeOffer = () => {
  return (
    <section className="bg-dark py-12 text-light sm:py-24">
      <div className="mx-auto max-w-6xl px-3 xs:px-6 sm:px-9 md:px-12">
        <div className="md:text-center">
          <h2 className="mb-3 text-lg font-semibold text-gray">
            What We Offer
          </h2>

          <p className="mb-6 text-3xl font-bold tracking-tight text-gray">
            Modern Web Development Services
          </p>

          <p className="mb-6 text-lg">
            From eye-catching websites to feature-rich web applications, our
            team leverages the latest technologies to build dynamic and
            user-friendly digital experiences that captivate your audience.
          </p>

          <p className="mb-6 text-lg">
            Selecting the right partner for your web development needs is a
            crucial decision. With numerous options available in the market,
            it&apos;s important to choose a company that not only delivers
            exceptional results but also understands your unique business
            requirements.
          </p>

          <p className="mb-6 text-lg md:mb-12">
            Here&apos;s why we stand out from the crowd.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          {features.map((feature) => (
            <Card
              key={feature.name}
              className="rounded-md border-none bg-dark text-light"
            >
              <CardHeader className="mb-3 flex-row items-center gap-2 p-0 text-gray">
                <div className="mt-[6px] flex h-8 w-8 items-center justify-center rounded-full bg-red">
                  <feature.icon className="h-4 w-4" />
                </div>

                <CardTitle className="font-bold">{feature.name}</CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <p className="leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
