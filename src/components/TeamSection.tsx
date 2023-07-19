import Image from "next/image";

const people = [
  {
    name: "Ryel Banfield",
    role: "Founder / CEO",
    imageUrl: "/leadership.jpg",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-light py-24 text-dark sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8">
            Ryel Banfield is the driving force behind RCB Software. With a
            passion for innovation and expertise in web development, Ryel leads
            our team in crafting impactful software solutions. Under his
            guidance, RCB Software thrives as a customer-centric agency,
            delivering excellence to businesses worldwide.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  src={person.imageUrl}
                  alt=""
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full object-cover"
                  unoptimized
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-red ">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamSection;
