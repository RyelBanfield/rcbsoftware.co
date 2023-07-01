import Image from "next/image";

const LogoCloud = () => {
  return (
    <div className="bg-light py-12 text-dark">
      <div className="px-6">
        <h2 className="text-center text-lg font-semibold leading-8 text-base-100">
          Building with the world&apos;s most modern tools
        </h2>

        <div className="mt-9 grid grid-cols-5 items-center gap-12 px-6">
          <Image
            src="typescript.svg"
            alt="Typescript"
            width={158}
            height={48}
          />

          <Image src="react.svg" alt="React.js" width={158} height={48} />

          <Image src="next.svg" alt="Next.js" width={158} height={48} />

          <Image
            src="tailwindcss.svg"
            alt="TailwindCSS"
            width={158}
            height={48}
          />

          <Image src="vercel.svg" alt="Vercel" width={158} height={48} />
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
