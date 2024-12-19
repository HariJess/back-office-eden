import Image from "next/image";
import React, { ReactNode } from "react";
import CircleProgressBar from "./CircleProgressBar";

interface CardDataReportProps {
  type: string;
  percentage: number;
}

const CardDataReport: React.FC<CardDataReportProps> = ({
  type,
  percentage,
}) => {
  return (
    <>
      <div className="rounded-lg bg-white px-7.5 py-6 text-xl text-black dark:bg-boxdark">
        <div className="flex content-center items-center justify-center ">
          <strong>{type}</strong>
        </div>

        <div
          className="mx-5 mt-2"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <strong>{percentage} %</strong>
          </div>
          <div className="ml-auto">
            <CircleProgressBar percentage={percentage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDataReport;
