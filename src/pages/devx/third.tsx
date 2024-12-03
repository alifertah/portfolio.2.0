import React from "react";

interface Operation {
  title: string;
  status: string;
  date: string;
}

interface Payment {
  title: string;
  amount: number;
  date: string;
}

interface File {
  title: string;
  date: string;
}

const first: React.FC = () => {
  const operations: Operation[] = [
    {
      title: "Passport added",
      status: "Waiting for Approval",
      date: "04-04-2024",
    },
    {
      title: "Translation done",
      status: "Marked as checked",
      date: "04-04-2024",
    },
    {
      title: "Account Created",
      status: "Please add your info",
      date: "04-04-2024",
    },
  ];

  const payments: Payment[] = [
    { title: "Service Charge", amount: 1000, date: "04-04-2024" },
    { title: "Confirmation", amount: 500, date: "04-04-2024" },
    { title: "Application Fees", amount: 350, date: "04-04-2024" },
  ];

  const files: File[] = [
    { title: "Pre-admission", date: "05-04-2024" },
    { title: "Translation", date: "05-04-2024" },
    { title: "Pre-admission", date: "05-04-2024" },
  ];

  return (
      <div className="p-6 bg-gray-100 flex w-full justify-around space-x-10 min-h-screen">
    <section className="flex flex-col w-[60%] space-y-4">
      <div className="flex w-full mx-auto border-[1px] rounded-xl border-black">
        {/* Scholarship Section */}
        <div className="md:col-span-4 bg-white p-6 rounded-xl overflow-hidden">
          <h2 className="text-lg font-bold mb-2">
            Looking for <br></br> <span className="text-yellow-500 text-5xl">scholarship?</span>
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Includes tuition, dorm, <br></br> also you can get a stipend.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded font-bold hover:bg-green-600">
            Apply now
          </button>
          <div className="mt-4 flex justify-center">
          </div>
        </div>
        <img src="/img/img1.png" alt="" />
      </div>
    <div className="md:col-span-3 bg-white p-6 rounded-lg shadow ">
          <h3 className="text-lg font-bold mb-4">Latest Offers</h3>
          <div className="flex mb-4 self-end">
            <button className="text-sm text-blue-500 font-bold mr-4">Last Week</button>
            <button className="text-sm text-gray-500">This Week</button>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Bachelor scholarship",
                majors: "6 majors",
                country: "Italy",
                status: "Open",
              },
              {
                title: "Diploma scholarship",
                majors: "3 years",
                country: "China",
                status: "Open",
              },
              {
                title: "Master scholarship",
                majors: "$5,050",
                country: "USA",
                status: "Open",
              },
              {
                title: "Chinese scholarship",
                majors: "One year",
                country: "Europe",
                status: "Open",
              },
            ].map((offer, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-sm border-b-[1px] pb-2 border-red-400"
              >
                <div>
                  <p className="font-bold">{offer.title}</p>
                  <p className="text-gray-500">
                    {offer.majors} - {offer.country}
                  </p>
                </div>
                <div>
                    <span className="font-semibold">status</span>
                    <p className="text-green-500">{offer.status}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <button className="text-sm text-blue-500 hover:underline">
              Lead More
            </button>
          </div>
        </div>
        </section>
    <section className="flex flex-col space-y-4">
      {/* opertaions */}
      <div className="md:col-span-5 bg-white p-6 rounded-lg shadow">
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
