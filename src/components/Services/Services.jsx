import React from "react";
import Img2 from "../../assets/biryani/biryani2.png";

const ServicesData = [
  {
    id: 1,
    img: img2,
    name: "Biryani",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, laborum!",
  },
  {
    id: 2,
    img: img2,
    name: "Chicken Kari",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, laborum!",
  },
  {
    id: 3,
    img: img2,
    name: "Cold Cofee",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, laborum!",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* Card Section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {ServicesData.map(({ id, img, name, description }) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    key={id}
                    className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 shadow-xl"
                  >
                    <div className="h-[100px]">
                      <img
                        src={img}
                        alt=""
                        className="max-w-[200px] mx-auto block transform -translate-y-14
                                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
