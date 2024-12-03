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
    <h2 className="text-2xl font-bold mb-6">Programs</h2>
      
      {/* Balance Section */}
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-4">
        <div className="flex items-center">
          <img
            src="balance-image.png"
            alt="Balance"
            className="w-16 h-16 rounded-md mr-4"
          />
          <div>
            <p className="font-bold text-3xl">Balance: 10.00$</p>
            <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-500">Min. withdrawal $10</p>
            <button className="px-4 py-2 bg-green-500 text-white rounded-3xl border-[1px] border-black">
            Withdraw
            </button>

            </div>
          </div>
        </div>
      </div>
      {/* Yourreferral link */}
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-4">
        <div className="flex items-center">
          <img
            src="balance-image.png"
            alt="Balance"
            className="w-16 h-16 rounded-md mr-4"
          />
          <div>
            <p className="font-bold text-3xl">Yourreferral link</p>
            <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-500">Min. withdrawal $10</p>
            <button className="px-4 py-2 bg-green-500 text-white rounded-3xl border-[1px] border-black">
            Withdraw
            </button>

            </div>
          </div>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="border rounded-xl p-4 border-[1px] border-black ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">this month</h3>
          <button className="text-sm">▼</button>
        </div>
        <ul>
          <li className="flex justify-between mb-3 text-sm">
            <div>
              <p className="font-medium">a new registration</p>
              <p className="text-gray-500">1 hours ago</p>
            </div>
            <p className="text-green-500">00:00$</p>
          </li>
          <li className="flex justify-between mb-3 text-sm">
            <div>
              <p className="font-medium">a new registration</p>
              <p className="text-gray-500">2 hours ago</p>
            </div>
            <p className="text-green-500">00:00$</p>
          </li>
          <li className="flex justify-between mb-3 text-sm">
            <div>
              <p className="font-medium">your friend make a purchase</p>
              <p className="text-gray-500">2 hours ago</p>
            </div>
            <p className="text-green-500">10:00$</p>
          </li>
        </ul>
        <button className="block mt-4 mx-auto font-semibold text-sm text-black">
          see more
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
