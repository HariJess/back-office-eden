import Image from "next/image";
import React, { ReactNode } from "react";

interface CardDataWorkersProps {
  status: string;
  name: string;
  image: string;
  role: string;
  phone_number: string;
  email: string;
}

const CardDataWorkers: React.FC<CardDataWorkersProps> = ({
  status,
  name,
  image,
  role,
  phone_number,
  email,
}) => {
  const statusColor = status === "Absent" ? "bg-gray-2" : "bg-success"; // bg-success pour 'present'

  return (
    <div className="rounded-lg border-4 border-gray-2 bg-white px-7.5 py-6 dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div
          className={`flex h-6.5 w-22 items-center justify-center rounded-full ${statusColor}`}
        >
          {/* Afficher le cercle blanc seulement si le statut est 'present' */}
          {status === "Present" && (
            <div className="mr-0.5 h-2 w-2 rounded-full bg-white"></div>
          )}
          <strong>
            <span className="text-xs text-white md:text-base lg:text-sm">
              {status}
            </span>
          </strong>
        </div>

        <a href="#" className="mt-4 flex space-x-1 md:ml-10 md:mt-0 lg:ml-20">
          <div className="h-2 w-2 rounded-full bg-gray-3"></div>
          <div className="h-2 w-2 rounded-full bg-gray-3"></div>
          <div className="h-2 w-2 rounded-full bg-gray-3"></div>
        </a>
      </div>

      <div className="mt-6 flex items-center justify-center">
        <Image
          width={112}
          height={112}
          src={image}
          style={{
            width: "auto",
            height: "auto",
          }}
          alt="User"
        />
      </div>
      <strong>
        <div className="mt-2 flex items-center justify-center text-black">
          {name}
        </div>
      </strong>
      <div className="flex items-center justify-center text-center">{role}</div>
      <div className="flex">
        <div className="ml-auto flex border-b-2 border-gray-2 text-sm text-black">
          <a
            href="/workers/details"
            className="transition duration-300 ease-in-out hover:text-primary"
          >
            View details &gt;
          </a>
        </div>
      </div>

      <div className="mt-5 flex h-30 w-full flex-col rounded-md border-2 border-gray-2 bg-meta-2 p-2 dark:bg-meta-4">
        <div className="ml-2 mt-9 flex items-center space-x-2">
          <svg
            className="h-7 w-7 text-gray-3"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-xs text-black md:text-base lg:text-sm">
            {phone_number}
          </span>
        </div>

        {/* Email */}
        <div className=" ml-2 flex items-center space-x-2">
          <svg
            className="h-7 w-7 text-gray-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span className="text-xs text-black md:text-base lg:text-sm">
            {email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardDataWorkers;
