import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Expertise",
    description:
      "Our team of skilled developers is well-versed in the latest web technologies and industry best practices. With a wealth of experience, we deliver software solutions that are not only visually stunning but also perform flawlessly.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Collaboration",
    description:
      "We believe in fostering strong partnerships with our clients. We value your input throughout the development process, ensuring that your vision is brought to life and your goals are achieved.",
    icon: LockClosedIcon,
  },
  {
    name: "Innovation",
    description:
      "We thrive on innovation and continuously push the boundaries of what's possible in the digital landscape. We stay up-to-date with emerging trends and technologies, so you can trust us to provide you with forward-thinking solutions that give you a competitive edge.",
    icon: ArrowPathIcon,
  },
  {
    name: "Customer Satisfaction",
    description:
      "Our commitment to your satisfaction is unwavering. We prioritize open communication and transparency throughout the development process, ensuring that your project is delivered on time and within budget. Your success is our ultimate goal, and we go above and beyond to ensure that you are thrilled with the results.",
    icon: FingerPrintIcon,
  },
];

const WhatWeOffer = () => {
  return (
    <div className="bg-dark py-24 text-light sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red">
            Experience Excellence
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray sm:text-4xl">
            Elevate Your Web Presence with RCB Software
          </p>
          <p className="mt-6 text-lg leading-8">
            At RCB Software, we understand that selecting the right partner for
            your web development needs is a crucial decision. With numerous
            options available in the market, it&apos;s important to choose a
            company that not only delivers exceptional results but also
            understands your unique business requirements. Here&apos;s why RCB
            Software stands out from the crowd:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
