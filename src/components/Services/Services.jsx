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
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              corporis praesentium, sit quia laudantium fugiat esse assumenda.
              Praesentium, fugit error!
            </p>
          </div>
          {/* Card Section */}
          <div>
              <div className="grid grid-cols-1">
                  {ServicesData.map(({id, img, name, description }) => {
                      return(
                          <div key={id}>
                              <div className="h-[100px]">
                                  <img 
                                  src={img}
                                  alt=""
                                  className="max-w-[200px] mx-auto block transform -translate-y-14
                                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                                  />
                                  </div>
                                  <div>
                                      <h1 className="text-xl font-bold">{name}</h1>
                                      <p className="text-gray-500 text-sm line-clamp-2">
                                          {description}
                                      </p>
                                  </div>
                      )
                  })}
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
