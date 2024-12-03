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
const notifications = [
    {
      title: "Congratulation you are admitted",
      time: "1 hours ago",
    },
    {
      title: "we Added new Service",
      time: "2 hours ago",
    },
    {
      title: "New Major opportunity",
      time: "6 hours ago",
    },
    {
      title: "offre specials for all our students",
      time: "a Day ago",
    },
    {
      title: "diploma program with scholarship",
      time: "1 Year ago",
    },
    {
      title: "Sale 20% off all our translation service",
      time: "1 hours ago",
    },
    {
      title: "new affiliate program added",
      time: "1 hours ago",
    },
  ];

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
    <section className="flex flex-col w-full space-y-4">
    <div className="mt-6 p-4 border rounded-lg shadow-lg bg-white border-[1px] border-black">
      <h2 className="text-2xl font-bold text-center mb-4">Notification</h2>
      <div className="flex justify-end mb-2 text-sm">
        <button className="text-gray-600 hover:text-blue-600 flex items-center space-x-1">
          <span>Filter by</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <ul className="space-y-3">
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <p className="text-gray-800 font-medium">{notification.title}</p>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-sm text-green-600 font-semibold hover:underline"
              >
                see more
              </a>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600 hover:text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l-6 6m0 0l-6-6m6 6V2"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <button className="text-gray-600 hover:text-blue-600">
          Lead More
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
