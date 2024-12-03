import React from "react";


const CareerCard = ({ title, description, role } : any) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <div className="p-4">
          {/* Card Header */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="text-sm font-semibold">SMAP</h3>
              <p className="text-xs text-gray-500">Expert 3D Designer</p>
            </div>
          </div>
          {/* Card Content */}
          <p className="text-sm text-gray-700 mb-3">
            {description}
            <a href="#" className="text-blue-500 ml-1 underline">
              read more
            </a>
          </p>
          {/* Role & CTA */}
          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold">{role}</h4>
            <button className="bg-green-500 text-white px-4 py-2 text-sm rounded-lg shadow-md hover:bg-green-600">
              SEE AVAILABLE OFFERS
            </button>
          </div>
        </div>
      </div>
    );
  };

const first: React.FC = () => {
    const careers = [
        {
          title: "Manager",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          role: "Manager",
        },
        {
          title: "Nurse",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          role: "Nurse",
        },
      ];

  return (
      <div className="p-6 bg-gray-100 flex w-full justify-around space-x-10 min-h-screen">
    <section className="flex flex-col w-full space-y-4">
    <div className="max-w-4xl mx-auto">
        <div className="flex space-x-8 mb-4">
            <h2 className="text-xl font-bold mb-6">Career</h2>
            <select className="bg-green-500 rounded-3xl text-white px-6" name="" id="">
                <option value="">All majors</option>
                <option value="">All posts</option>
            </select>
        </div>
        {/* Career Cards */}
        {careers.map((career, index) => (
          <CareerCard
            key={index}
            title={career.title}
            description={career.description}
            role={career.role}
          />
        ))}
        <div className="flex justify-center mt-4">
          <button className="font-semibold hover:underline">
            See more
          </button>
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
