import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "lorem ipsum dolor sit amet",
  "lorem ipsum dolor sit amet",
  "lorem ipsum dolor sit amet",
];

const Pricing = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray sm:text-4xl">
            Simple and Transparent Pricing
          </h2>

          <p className="mt-6 text-lg leading-8">
            Harness the power of the internet with our expert web development
            services. From eye-catching websites to feature-rich web
            applications, our team leverages the latest technologies to build
            dynamic and user-friendly digital experiences that captivate your
            audience.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-red">
              Packages
            </h3>

            <p className="mt-6 text-base leading-7">
              At RCB Software, we believe in providing simple and transparent
              pricing options. We understand that budget considerations are
              essential for businesses, which is why we offer straightforward
              pricing plans tailored to your specific needs. With no hidden fees
              or surprises, you can trust that our pricing is transparent and
              designed to deliver value.
            </p>

            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-red">
                What&apos;s included
              </h4>
              <div className="h-px flex-auto bg-gray" />
            </div>

            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-red"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="ring-gray-900/5 rounded-2xl py-10 text-center ring-1 ring-inset ring-red lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="font-semibold">Starting from</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-red">
                    $500
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-6 block w-full rounded-md bg-red px-3.5 py-2.5 text-center text-sm font-semibold text-light"
                >
                  Contact Us
                </a>
                <p className="mt-6 text-xs leading-5">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
