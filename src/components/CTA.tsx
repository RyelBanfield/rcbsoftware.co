import Image from "next/image";

import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="bg-dark text-light">
      <div className="relative isolate overflow-hidden px-3 pt-16 xs:px-6 sm:rounded-3xl sm:px-9 md:px-12 md:pt-24 lg:flex lg:gap-x-20 lg:px-40 xl:px-60">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#B80000" />
              <stop offset={1} stopColor="#B80000" />
            </radialGradient>
          </defs>
        </svg>

        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-md lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="mb-3 text-lg font-semibold text-gray">
            Digitize your business.
          </h2>

          <p className="mb-6 text-3xl font-bold tracking-tight text-gray">
            Bring your ideas to life.
          </p>

          <p className="mb-6 text-lg">
            Enhance your business with our tailored digital solutions. We create
            captivating websites, innovative mobile apps, and more. Let us
            empower your brand&apos;s online presence for sustained growth.
          </p>

          <Button size={"lg"} asChild>
            <a href="#contact_form">Contact Us</a>
          </Button>
        </div>

        <div className="relative mt-16 h-80 lg:mt-8">
          <Image
            className="absolute left-0 top-0 mx-auto w-[57rem] max-w-none rounded-md"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
