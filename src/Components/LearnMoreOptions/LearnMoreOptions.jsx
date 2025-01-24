import Link from "next/link";
import React from "react";

const lerndata = [
  {
    title: "About",
    Link: "/about",
  },
  {
    title: "Blog",
    Link: "/blog",
  },
  {
    title: "service",
    Link: "/service",
  },
  {
    title: "Contact",
    Link: "contact",
  },
];

export default function LearnMoreOptions() {
  return (
    <div className="px-2 py-4 ">
      <h2 className="text-3xl font-bold py-3 text-center md:text-left  ">
        Learn more
      </h2>
      <div className="flex flex-col md:items-start items-center">
        <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {lerndata.map((ele, id) => {
            return (
              <div
                key={id}
                className="relative bg-cover bg-center w-56 h-20 rounded-lg shadow-md flex justify-center items-center  "
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/3780104/pexels-photo-3780104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                }}
              >
                <div>
                  <Link
                    href={ele.Link}
                    className="text-white font-semibold text-lg  px-4 py-2 rounded  transition"
                  >
                    {ele.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
