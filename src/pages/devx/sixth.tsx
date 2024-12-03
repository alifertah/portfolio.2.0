import React from "react";
const offers = [
    {
      icon: "bachelor.png", // Replace with actual image paths
      title: "Bachelor",
      type: "scholarship",
      details: "6 majors",
      duration: "30 seats",
      country: "CHINA",
      statute: "Open",
    },
    {
      icon: "diploma.png",
      title: "Diploma",
      type: "scholarship",
      details: "3 years",
      duration: "30 seats",
      country: "CHINA",
      statute: "Open",
    },
    {
      icon: "master.png",
      title: "Master",
      type: "scholarship",
      details: "$5,05",
      duration: "1 item",
      country: "CHINA",
      statute: "Open",
    },
    {
      icon: "chinese.png",
      title: "Chinese",
      type: "scholarship",
      details: "One year",
      duration: "30 seats",
      country: "CHINA",
      statute: "Open",
    },
    {
      icon: "chinese.png",
      title: "Chinese",
      type: "scholarship",
      details: "One year",
      duration: "30 seats",
      country: "CHINA",
      statute: "Open",
    },
    {
      icon: "chinese.png",
      title: "Chinese",
      type: "scholarship",
      details: "One year",
      duration: "30 seats",
      country: "CHINA",
      statute: "Open",
    },
  ];
const first: React.FC = () => {

  return (
      <div className="p-6 bg-gray-100 flex w-full justify-around space-x-10 min-h-screen">
    <section className="flex flex-col w-full space-y-4">
    <div className="mt-6 p-4 border rounded-lg shadow-lg bg-white border-[1px] border-black">
    <h2 className="text-2xl font-bold text-center mb-6">Latest Offers</h2>
      <div className="flex justify-between mb-4">
        <div className="space-x-4">
        </div>
        <div>
          <button className="px-4 py-2  rounded-md">Last Week</button>
          <button className="px-4 py-2  rounded-md">This Week</button>
        <button className="p-2 bg-red-500 text-white rounded">3</button>
        </div>
      </div>
      <div className="space-y-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-[1px] border-red-400"
          >
            <div className="flex items-center space-x-4">
              <img
                src={offer.icon}
                alt={offer.title}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">{offer.title}</p>
                <p className="text-sm text-gray-500">{offer.type}</p>
              </div>
            </div>
            <p className="text-sm flex flex-col"><span className="text-black font-semibold text-lg">{offer.type}</span>{offer.details}</p>
            <p className="text-sm flex flex-col"><span className="text-black font-semibold text-lg">{offer.details}</span>{offer.duration}</p>
            <p className="text-sm flex flex-col"><span className="text-black font-semibold text-lg">Country</span>{offer.country}</p>
            <p className="text-sm text-green-500 flex flex-col"><span className="text-black font-semibold text-lg">status</span>{offer.statute}</p>
          </div>
        ))}
      </div>
      <button className="block mx-auto mt-4 px-4 py-2 font-bold text-gray-500 rounded-md">
        Lead More
      </button>
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
