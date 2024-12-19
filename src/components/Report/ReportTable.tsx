"use client";

import { Package } from "@/types/package";
import { Sales_report } from "@/types/sales_report";
import { useState } from "react";

const report: Sales_report = {
  columns: [
    {
      columnLabel: "Candy",
      monthlyData: [
        { month: "February", value: 1000000 },
        { month: "March", value: 1200000 },
        { month: "April", value: 1050000 },
        { month: "May", value: 1350000 },
        { month: "June", value: 1100000 },
      ],
    },
    {
      columnLabel: "Soaps",
      monthlyData: [
        { month: "February", value: 1000000 },
        { month: "March", value: 1200000 },
        { month: "April", value: 1050000 },
        { month: "May", value: 1350000 },
        { month: "June", value: 1100000 },
      ],
    },
    {
      columnLabel: "Spaghetti",
      monthlyData: [
        { month: "February", value: 1000000 },
        { month: "March", value: 1200000 },
        { month: "April", value: 1050000 },
        { month: "May", value: 1350000 },
        { month: "June", value: 1100000 },
      ],
    },
    {
      columnLabel: "Cakes",
      monthlyData: [
        { month: "February", value: 1000000 },
        { month: "March", value: 1200000 },
        { month: "April", value: 1050000 },
        { month: "May", value: 1350000 },
        { month: "June", value: 1100000 },
      ],
    },
  ],
};

const ReportTable = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilterChange = () => {
    // Logique de filtre en fonction des dates (à implémenter en fonction de votre structure de données)
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                <strong>Column Labels</strong>
              </th>
              {report.columns[0].monthlyData.map((data, index) => (
                <th
                  key={index}
                  className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white"
                >
                  <strong>{data.month}</strong>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {report.columns.map((column, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {column.columnLabel}
                  </h5>
                </td>
                {column.monthlyData.map((data, index) => (
                  <td
                    key={index}
                    className="border-b border-[#eee] px-4 py-5 dark:border-strokedark"
                  >
                    {data.value.toLocaleString()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTable;
