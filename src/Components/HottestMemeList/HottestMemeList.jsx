import React from "react";
import HottestMemeCard from "./HottestMemeCard";

const MemeData = [
  {
    title: "Virtual",
    price: "2.44",
    image: "https://i.gifer.com/ArlX.gif",
    groth: { positive: "0.56", negative: false },
    marketCap: "1.7 B",
  },
  {
    title: "Virtual 2",
    price: "44.44",
    image: "https://i.gifer.com/5SM.gif",
    groth: { positive: false, negative: "76.77" },
    marketCap: "768 K",
  },
  {
    title: "Virtual 3",
    price: "54.44",
    image: "https://i.gifer.com/3zM0.gif",
    groth: { positive: false, negative: "44" },
    marketCap: "1.7 M",
  },
  {
    title: "Virtual 4",
    price: "23.44",
    image: "https://i.gifer.com/Xrl7.gif",
    groth: { positive: "0.56", negative: false },
    marketCap: "458 K",
  },
];

export default function HottestMemeList() {
  return (
    <div className="p-4  ">
      <h2 className="text-3xl font-bold my-3 text-center md:text-left">Hottest</h2>
      <div className="flex flex-col md:items-start items-center">
      <div className=" flex gap-8 overflow-scrol px-4  "  style={{ maxWidth: "100vw", overflowX: "auto" , overflowX: "auto", 
            scrollbarWidth: "none",  }}>
        {MemeData.map((ele, id) => (
          <HottestMemeCard CardData={ele} CardDataId={id} key={id} />
        ))}
      </div>
        </div>
    </div>
  );
}
