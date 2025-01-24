import React from "react";

export default function HottestMemeCard({ CardData ,CardDataId }) {
  return (
    <div key={CardDataId}>
      <div className="w-60 h-64 md:w-52 rounded-md overflow-hidden shadow-md   ">
        <img
          src={CardData?.image}
          className="h-40 w-full object-cover "
          alt="img"
        />
        <div className="mt-4 px-2 ">
          <h2 className="text-lg  ">{CardData.title}</h2>
          <div className="flex justify-between ">
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className=" ">${CardData.price}</p>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-center -mt-5 ">
                <span
                  className={
                    CardData.groth.negative ? "text-red-400" : "text-green-500"
                  }
                >
                  {CardData.groth.negative?"▼":"▲"}
                </span>
                <p
                  className={
                    CardData.groth.negative
                      ? "text-red-600"
                      : "ml-1 text-green-600  "
                  }
                >
                  {CardData.groth?.positive || CardData.groth?.negative}%
                </p>
              </div>
              <p className="text-sm text-gray-900 ">Market Cap</p>
              <p className="text-base ">{CardData.marketCap}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
