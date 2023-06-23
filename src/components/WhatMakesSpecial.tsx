import { ClockIcon } from "@heroicons/react/24/outline";

const listItems = [
  {
    icon: <ClockIcon className="h-6 w-6" />,
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Errorcumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?",
  },
  {
    icon: <ClockIcon className="h-6 w-6" />,
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Errorcumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?",
  },
  {
    icon: <ClockIcon className="h-6 w-6" />,
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Errorcumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?",
  },
];

const WhatMakesUsSpecial = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
            What makes us special
          </h2>

          <p className="mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {listItems.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="rounded-md bg-secondary p-2">{item.icon}</span>

              <div>
                <h2 className="text-lg font-bold">{item.title}</h2>

                <p className="mt-1 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsSpecial;
