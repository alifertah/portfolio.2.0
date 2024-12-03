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

interface FileItem {
    title: string;
    date: string;
    time: string;
    icon: string;
  }
  
  const files: FileItem[] = [
    { title: "Card ID", date: "21 December 2023", time: "11:00", icon: "🆔" },
    { title: "Passport", date: "29 December 2023", time: "16:00", icon: "🛂" },
    { title: "Baccalaureate", date: "21 December 2023", time: "11:00", icon: "🎓" },
    { title: "Bachelor's degree", date: "29 December 2023", time: "16:00", icon: "📜" },
    { title: "Master's Degree", date: "21 December 2023", time: "11:00", icon: "🎓" },
    { title: "PHD Degree's", date: "29 December 2023", time: "16:00", icon: "📜" },
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


  return (
      <div className="p-6 bg-gray-100 flex justify-around space-x-10 min-h-screen">
      {/* application*/}
    <section className="flex">
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Action Buttons */}
      <div className="flex space-x-4 mb-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded font-bold hover:bg-red-600">
          + Create File
        </button>
        <button className="bg-green-500 text-white px-6 py-2 rounded font-bold hover:bg-green-600">
          + Add File
        </button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded font-bold hover:bg-gray-600">
          + Translation
        </button>
      </div>

      {/* File List */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-lg font-bold">My Files</h2>
          <div className="flex items-center text-gray-500 text-sm cursor-pointer">
            <span>See Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Files */}
        <ul className="space-y-4 ">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex justify-between items-center space-x-2 text-sm border-b pb-4 last:border-none"
            >
              {/* File Icon and Info */}
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full text-lg">
                  {file.icon}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-700">{file.title}</p>
                  <p className="text-gray-500">
                    {file.date} - {file.time}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
                  View
                </button>
                <button className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600">
                  Add Translation
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Discover All Button */}
        <div className="mt-6 text-center">
          <button className="text-blue-500 hover:underline text-sm">
            Discover All
          </button>
        </div>
      </div>
    </div>


      </section>
      <section className="mt-10 ">
    {/* File added */}
      <div className="flex flex-col bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg font-bold">Operation</h2>
          <div className="text-gray-500 text-sm flex items-center space-x-1">
            <span>All Time</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
            <div className="flex items-center space-x-4 border-b-[1px] mx-auto text-center w-full justify-center space-x-9 pb-4 mt-4">
            <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="font-semibold">pre-admission</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
              <div>
                {/* <p className="font-semibold">translation done</p> */}
                <span className="text-gray-500">congratulation you are
                pre-admitted</span>
              </div>
              <div>
                <p className="font-semibold text-green-400">$1000</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-b-[1px] mx-auto text-center w-full justify-center space-x-9 pb-4 mt-4">
            <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="font-semibold">pre-admission</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
              <div>
                {/* <p className="font-semibold">translation done</p> */}
                <span className="text-gray-500">congratulation you are
                pre-admitted</span>
              </div>
              <div>
                <p className="font-semibold text-green-400">$1000</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-b-[1px] mx-auto text-center w-full justify-center space-x-9 pb-4 mt-4">
            <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="font-semibold">pre-admission</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
              <div>
                {/* <p className="font-semibold">translation done</p> */}
                <span className="text-gray-500">congratulation you are
                pre-admitted</span>
              </div>
              <div>
                <p className="font-semibold text-green-400">$1000</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
            </div>
            
      </div>
      {/* Payments */}
      <div className="flex flex-col bg-white shadow p-4 rounded-lg mt-8">
        <div className="flex justify-between items-center w-full ">
          <h2 className="text-lg font-bold">Payment</h2>
          <div className="text-gray-500 text-sm flex items-center space-x-1">
            <span>All Time</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
            <div className="flex items-center space-x-4 border-b-[1px] mx-auto text-center px-10 pb-4 mt-4">
            <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="font-semibold">service charge
                </p>
                <span className="text-gray-500">study in china
                </span>
              </div>
              <div>
                <p className="font-semibold text-green-400">$1000</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-b-[1px] mx-auto text-center px-10 pb-4 mt-4">
            <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="font-semibold">service charge
                </p>
                <span className="text-gray-500">study in china
                </span>
              </div>
              <div>
                <p className="font-semibold text-green-400">$1000</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-b-[1px] mx-auto text-center px-10 pb-4 mt-4">
            <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="font-semibold">service charge
                </p>
                <span className="text-gray-500">study in china
                </span>
              </div>
              <div>
                <p className="font-semibold text-green-400">$1000</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
            </div>
      </div>
              </section>
    </div>
  );
};

export default first;
