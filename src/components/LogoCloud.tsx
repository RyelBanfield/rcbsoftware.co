import Image from "next/image";

const LogoCloud = () => {
  return (
    <div className="bg-light py-12 text-dark sm:py-24">
      <div className="mx-auto max-w-6xl px-3 xs:px-6 sm:px-9 md:px-12">
        <h2 className="mb-6 text-center text-lg font-semibold leading-relaxed md:mb-12">
          Building with the world&apos;s most modern tools
        </h2>

        <div className="grid grid-cols-5 gap-8 px-3 min-[375px]:gap-12 xs:px-6 sm:gap-20 sm:px-9 md:gap-24 md:px-12">
          <Image
            src="typescript.svg"
            alt="Typescript"
            width={50}
            height={50}
            unoptimized
          />
          <Image
            src="react.svg"
            alt="React.js"
            width={50}
            height={50}
            unoptimized
          />
          <Image
            src="next.svg"
            alt="Next.js"
            width={50}
            height={50}
            unoptimized
          />
          <Image
            src="tailwind.svg"
            alt="TailwindCSS"
            width={50}
            height={50}
            unoptimized
          />
          <Image
            src="vercel.svg"
            alt="Vercel"
            width={50}
            height={50}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
