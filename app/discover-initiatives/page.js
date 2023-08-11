"use client";
import { useState } from "react";
import { Oxygen_Mono } from "next/font/google";

import SectionIntro from "../components/SectionIntro";
import { statuses, pageIntro, projectsFunded } from "../components/data/data";

const mono = Oxygen_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-mono",
});

const FundingStatus = ({ bgColor, status }) => {
  return (
    <p className={`bg-${bgColor} px-3 py-1 rounded-3xl font-semibold`}>
      {status}
    </p>
  );
};

const DiscoverInitiatives = () => {
  const [active, setActive] = useState("all");

  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <SectionIntro {...pageIntro} />
      </div>
      <div className="flex justify-center">
        <ul className="flex gap-3 mt-5">
          <li
            className={`${
              active.toLowerCase() === "all" && "bg-bgSecondary"
            } p-3 rounded-xl cursor-pointer`}
            onClick={() => setActive("all")}
          >
            All
          </li>
          {statuses.map((status, index) => (
            <li
              key={index}
              className={`${
                active === status.title && "bg-bgSecondary"
              } p-3 rounded-xl cursor-pointer`}
              onClick={() => setActive(status.title)}
            >
              {status.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-14">
        {projectsFunded.map((project, index) =>
          active === "all" ? (
            <div
              key={`project-${index}`}
              className="bg-bgSecondary p-5 rounded-2xl flex flex-col gap-3 mb-5"
            >
              <div className="flex justify-between">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <FundingStatus
                  bgColor={
                    project.status.toLowerCase() === "open"
                      ? "bgButton"
                      : project.status.toLowerCase() === "completed"
                      ? "bgGreen"
                      : "bgPrimary"
                  }
                  status={
                    project.status.toLowerCase() === "completed"
                      ? project.status + " ✓"
                      : project.status
                  }
                />
              </div>
              <p className="max-w-[80%]">{project.description.slice(0, 100)}</p>
              <p className={`${mono.className} text-sm`}>
                Funding amount: {project.startAmount} - {project.endAmount}
              </p>
            </div>
          ) : (
            active === project.status && (
              <div
                key={`project-${index}`}
                className="bg-bgSecondary p-5 rounded-2xl flex flex-col gap-3 mb-5"
              >
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <FundingStatus
                    bgColor={
                      project.status.toLowerCase() === "open"
                        ? "bgButton"
                        : project.status.toLowerCase() === "completed"
                        ? "bgGreen"
                        : "bgPrimary"
                    }
                    status={
                      project.status.toLowerCase() === "completed"
                        ? project.status + " ✓"
                        : project.status
                    }
                  />
                </div>
                <p className="max-w-[80%]">
                  {project.description.slice(0, 100)}
                </p>
                <p className={`${mono.className} text-sm`}>
                  Funding amount: {project.startAmount} - {project.endAmount}
                </p>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default DiscoverInitiatives;
