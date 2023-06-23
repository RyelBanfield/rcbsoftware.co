import Image from "next/image";

import { Header, WhatMakesUsSpecial } from "@/components";

const LandingPage = () => {
  return (
    <>
      <Header />
      <WhatMakesUsSpecial />

      <section>
        <div className="mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-md bg-secondary p-8">
              <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold text-primary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className="hidden text-primary/90 sm:mt-4 sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  egestas tempus tellus etiam sed.
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded-md border border-primary bg-primary px-12 py-3 text-sm font-medium text-base-100 transition hover:text-secondary focus:outline-none focus:ring focus:ring-secondary"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/image-1.jpeg"
                alt="Student"
                width={1920}
                height={1080}
                className="h-full w-full rounded-md object-cover"
              />
              <Image
                src="/image-6.jpg"
                alt="Student"
                width={1920}
                height={1080}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
