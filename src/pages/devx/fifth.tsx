import React from "react";

const services = [
    {
      title: "TRANSLATION",
      image: "translation.png", // Replace with the actual image path
      badge: "NEW",
      bgColor: "bg-blue-500",
    },
    {
      title: "SCHOLARSHIP",
      image: "scholarship.png", // Replace with the actual image path
      badge: "CONFIRMED",
      bgColor: "bg-red-500",
    },
    {
      title: "ORIENTATION",
      image: "orientation.png", // Replace with the actual image path
      badge: "NEW",
      bgColor: "bg-purple-500",
    },
    {
      title: "ASSISTANCE",
      image: "assistance.png", // Replace with the actual image path
      badge: "NEW",
      bgColor: "bg-yellow-500",
    },
  ];

const first: React.FC = () => {

  return (
      <div className="p-6 bg-gray-100 flex w-full justify-around space-x-10 min-h-screen">
    <section className="flex flex-col w-full space-y-4">
      <h2 className="text-2xl font-bold mb-6">Services</h2>
    <div className="mt-6 p-4 border rounded-lg shadow-lg bg-white border-[1px] border-black">
      <div className="grid grid-cols-2 gap-6 ">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-4 rounded-lg shadow-lg ${service.bgColor}`}
          >
            {/* Badge */}
            {service.badge && (
              <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                {service.badge}
              </span>
            )}

            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16"
              />
            </div>

            {/* Title */}
            <div className="text-center">
              <button className="px-4 py-2 text-sm font-bold text-white bg-green-600 rounded hover:bg-green-700">
                {service.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
    <section className="flex flex-col space-y-4">
      {/* opertaions */}
      <div className="md:col-span-5 bg-white p-6 rounded-lg shadow border-black border-[1px]">
          <div className="flex justify-between mb-4">
            <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
              Majors
            </button>
            <button className="px-4 py-2 bg-transparent hover:underline">
              Programs
            </button>
            <button className="px-4 py-2 bg-transparent hover:underline">
              Testimonials
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Cards */}
            {[
              {
                title: "Business Administration",
                img: "https://via.placeholder.com/150",
              },
              { title: "Computer Science", img: "https://via.placeholder.com/150" },
              { title: "Health Majors", img: "https://via.placeholder.com/150" },
              { title: "Engineering", img: "https://via.placeholder.com/150" },
            ].map((card, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                  Only 20 Seats
                </div>
                <div className="p-2 text-sm font-bold">{card.title}</div>
              </div>
            ))}
          </div>
        </div>
        {/* my application  */}
      <div className="mt-0 bg-white p-6 rounded-lg shadow my-auto">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">My application</h3>
          <button className="text-sm text-gray-500">This Month</button>
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex items-center mr-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Country"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-2">
              <p className="font-bold">Bachelor</p>
              <p className="text-sm text-gray-500">in Computer Science</p>
            </div>
          </div>
          <div className="ml-auto bg-red-500 text-white text-sm px-4 py-2 rounded">
            Processing
          </div>
        </div>
      </div>     

      </section>
    </div>
  );
};

export default first;
