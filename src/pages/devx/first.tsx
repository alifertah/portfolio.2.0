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
      <div className="p-6 bg-gray-100  flex flex-col space-x-10 min-h-screen">
      {/* application*/}
    <section className="flex ">
      <div className="flex flex-col w-[50%]">
        <div className="rounded-lg ">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">My Application</h2>
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
          {/* Status Cards */}
          <div className="grid grid-cols-2 gap-4 mt-4 rounded shadow mx-10 p-2 bg-white">
            {/* Processing Status */}
            <div className="flex items-center bg-green-500 text-white rounded-lg p-4 space-x-4 justify-between">
              <div>
                <p className="text-sm font-bold">Bachelor in China</p>
                <p className="text-lg font-bold">Processing</p>
              </div>
              <div className="ml-auto text-sm bg-green-600 px-3 py-1 rounded-full">
                70%
              </div>
            </div>

            {/* Action Required */}
            <div className="flex items-center bg-red-500 text-white rounded-lg p-4 space-x-4">
              <div>
                <p className="text-sm font-bold">Action required</p>
                <p className="text-lg font-bold">Submit your file</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Files Section */}
        <div className="mt-6 mx-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">My Files</h2>
            <button className="text-blue-500 text-sm">See All</button>
          </div>

          {/* Submitted Files */}
          <div className="flex items-center mt-4 justify-between mx-10 bg-white p-4 rounded-lg">
            <p className="font-bold text-gray-700 text-2xl">5 Submitted</p>
            <div className="flex items-center space-x-[-00] ml-4">
              <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* opertaions */}
      <div className="flex w-[50%] flex-col p-4 rounded-lg bg-white ml-10">
        <div className="flex justify-between items-center w-full ">
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
            <div className="flex items-center space-x-4 border-b-[1px] mx-auto text-center px-10 pb-4 mt-4">
            <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="font-semibold">translation done</p>
                <span className="text-gray-500">marked as checked</span>
              </div>
              <div>
                <p className="font-semibold text-green-400">TIME</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-b-[1px] mx-auto text-center px-10 pb-4">
            <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="font-semibold">translation done</p>
                <span className="text-gray-500">marked as checked</span>
              </div>
              <div>
                <p className="font-semibold text-green-400">TIME</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-b-[1px] mx-auto text-center px-10 pb-4">
            <img
                src="https://via.placeholder.com/30"
                alt="avatar"
                className="w-8 h-8 rounded-full border"
              />
              <div>
                <p className="font-semibold">translation done</p>
                <span className="text-gray-500">marked as checked</span>
              </div>
              <div>
                <p className="font-semibold text-green-400">TIME</p>
                <span className="text-gray-500">04-04-2024</span>
              </div>
            </div>
      </div>

      </section>
      <section className="mt-10 flex space-x-10">
    {/* File added */}
      <div className="flex w-[50%] flex-col p-4 rounded-lg bg-white">
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
              <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded-lg">View</button>
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
              <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded-lg">View</button>
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
              <button className="bg-red-600 text-white font-semibold px-3 py-1 rounded-lg">View</button>
            </div>
            
      </div>
      {/* Payments */} 
      <div className="flex w-[50%] flex-col p-4 rounded-lg bg-white">
        <div className="flex justify-between items-center w-full">
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
