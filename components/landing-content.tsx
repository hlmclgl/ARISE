"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ahmet Hilmi",
    avatar: "/me.png",
    title: "Software Developer",
    description: "This is the best AI application I've ever used!",
  },
  {
    name: "Loïc Bessilé",
    avatar: "/loic.png",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Marion Cloe",
    avatar: "/marion.png",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
  {
    name: "Mehmet",
    avatar: "/mehmet1.png",
    title: "Student",
    description:
      "This app has changed my life & my student career, cannot imagine working without it!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Feedbacks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-1">
                <div className="relative h-24 w-24 mr-0">
                  <img
                    className="h-24 w-24 rounded-full cursor-pointer"
                    src={item.avatar}
                    alt={`${item.name}'s Avatar`}
                  />
                </div>
                <br />

                <div>
                  <p className="text-xl">{item.name}</p>

                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
