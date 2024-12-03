import React from "react";

const first: React.FC = () => {

  return (
      <div className="p-6 bg-gray-100 flex w-full justify-around space-x-10 min-h-screen">
    <section className="flex flex-col w-full space-y-4">
    <h2 className="text-2xl font-bold mb-6">Ressources</h2>
      
      {/* Balance Section */}
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-4 bg-white ">
      <img
        src="program-image.png"
        alt="Program"
        className="w-24 h-24 rounded-lg mr-4"
      />

      {/* Text Section */}
      <div className="flex-grow ">
        <h3 className="text-xl font-bold mb-2">One year Chinese Language</h3>
        <p className="text-sm">
          <span className="font-medium border-t-2 border-red-500">Scholarship:</span>{" "}
          <span className="text-green-500">Available</span>
        </p>
        <p className="text-sm">
          <span className="font-medium">Registration:</span>{" "}
          <span className="text-green-500">Open</span>
        </p>
      </div>

      {/* Button Section */}
      <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-3xl border-[1px] border-black">
        read More
      </button>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-4 bg-white ">
      <img
        src="program-image.png"
        alt="Program"
        className="w-24 h-24 rounded-lg mr-4"
      />

      {/* Text Section */}
      <div className="flex-grow ">
        <h3 className="text-xl font-bold mb-2">One year Chinese Language</h3>
        <p className="text-sm">
          <span className="font-medium border-t-2 border-red-500">Scholarship:</span>{" "}
          <span className="text-green-500">Available</span>
        </p>
        <p className="text-sm">
          <span className="font-medium">Registration:</span>{" "}
          <span className="text-green-500">Open</span>
        </p>
      </div>

      {/* Button Section */}
      <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-3xl border-[1px] border-black">
        read More
      </button>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-4 bg-white ">
      <img
        src="program-image.png"
        alt="Program"
        className="w-24 h-24 rounded-lg mr-4"
      />

      {/* Text Section */}
      <div className="flex-grow ">
        <h3 className="text-xl font-bold mb-2">One year Chinese Language</h3>
        <p className="text-sm">
          <span className="font-medium border-t-2 border-red-500">Scholarship:</span>{" "}
          <span className="text-green-500">Available</span>
        </p>
        <p className="text-sm">
          <span className="font-medium">Registration:</span>{" "}
          <span className="text-green-500">Open</span>
        </p>
      </div>

      {/* Button Section */}
      <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-3xl border-[1px] border-black">
        read More
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
