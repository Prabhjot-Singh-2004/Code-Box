import React from "react";
import Image from "next/image";

const ExploreMoreOptions = [
  {
    id: 1,
    title: "Quizz Pack",
    desc: "Practice what you learned with bite-sized code challenges.",
    icon: "/tree.png",
  },
  {
    id: 2,
    title: "Video Courses",
    desc: "Learn with structured video lessons taught step-by-step.",
    icon: "/game.png",
  },
  {
    id: 3,
    title: "Community Project",
    desc: "Build real-world apps by collaborating with the community.",
    icon: "/growth.png",
  },
  {
    id: 4,
    title: "Explore Apps",
    desc: "Explore prebuild app which you can try demo and build it.",
    icon: "/start-up.png",
  },
];

function ExploreMore() {
  return (
    <div className="mt-8">
      <h2 className="text-3xl mb-2 font-game">Explore More</h2>
      <div className="grid grid-cols-2 gap-5">
        {ExploreMoreOptions.map((option, index) => (
          <div key={index} className="flex gap-2 p-2 border rounded-xl bg-zinc-900">
            <Image
              src={option?.icon}
              alt={option.title}
              width={80}
              height={80}
            />
            <div>
                <h2 className="font-medium text-2xl font-game">{option.title}</h2>
                <p className="font-game text-gray-400">{option.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMore;