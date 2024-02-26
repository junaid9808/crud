import React, { useEffect, useState } from "react";
import { PagesData } from "./PagesData";

export default function () {
  const [arrayyears, setArrayyears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    const uniqueYear = new Set();
    const yearsArray = [];
    for (let i = 0; i < PagesData?.length; i++) {
      let values = PagesData[i]?.year;
      if (values && !uniqueYear.has(values)) {
        uniqueYear.add(values);
        yearsArray.push(values);
      }
    }
    setArrayyears(yearsArray);
  }, []);

  const handleYearButtonClick = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="flex bg-white justify-start flex-col divide-red-400  ">
      <div className="flex flex-col justify-center items-center w-full m-auto  mt-4">
        <strong className="text-xl">Our Milestones</strong>
        <h1 className="mt-3">
          Our dream is to create an equal and barrier-free world with the power
          to make
          <h1 className="flex justify-center">
            every product and service technology
          </h1>
        </h1>
        <p className="bg-black p-2 rounded-full mt-8">
          <div className="m-2">
            {arrayyears?.map((item, index) => (
              <button
                key={index}
                className={
                  "text-white py-2 px-6 hover:bg-white hover:text-black rounded-full"
                }
                onClick={() => handleYearButtonClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </p>
      </div>

      {PagesData.map((item, index) => {
        if (selectedYear === null || selectedYear === item.year) {
          return (
            <div key={index}>
              <div className="flex justify-center items-center mx-20 mt-12">
                <div className="">
                  <img
                    src={item.image}
                    alt="Image"
                    className="w-32 h-32 rounded-full"
                  ></img>
                </div>
                <div className="ml-16">
                  <strong className="text-base">{item.headimg}</strong>
                  <h1 className="mt-2">{item.detail}</h1>
                  <strong className="text-black mt-2 underline">
                    Learn More
                  </strong>
                </div>
                <div className="mt-10 ml-64">
                  <strong className="">{item.year}</strong>
                </div>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-24"></hr>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
