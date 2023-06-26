import Image from "next/image";

const CTA = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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

        <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-base font-semibold leading-7 text-red">
            How We Work
          </h2>

          <p className="mt-2 text-3xl font-bold tracking-tight text-gray sm:text-4xl">
            Personalized Engagement
          </p>

          <p className="mt-6 text-lg leading-8">
            We believe that every project deserves a unique touch, which is why
            we take a personalized approach to every client engagement. Our
            collaborative process ensures that we fully understand your goals
            and aspirations, allowing us to develop customized software
            solutions that drive results and exceed expectations.
          </p>

          <div className="mt-10 flex items-center gap-x-6 lg:justify-start">
            <button className="w-36 rounded-md bg-red px-3.5 py-2.5 text-sm font-semibold text-light transition duration-300 hover:bg-dark-red active:scale-95">
              Contact Us
            </button>

            <a href="#" className="text-sm font-semibold leading-6 text-gray">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="relative mt-16 h-80 lg:mt-8">
          <Image
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
