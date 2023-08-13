"use client";
import { useState } from "react";
import Link from "next/link";

import onButton from "public/assets/on-button.png";
import offButton from "public/assets/off-button.png";
import { projectsFunded } from "../components/data/data";
import Card from "../components/Card";
import Image from "next/image";

const projectCategory = [
  {
    category: "SMEs",
  },
  {
    category: "Marketing",
  },
  {
    category: "Governance",
  },
  {
    category: "Technical",
  },
];

const FundedGrants = () => {
  const [active, setActive] = useState("all");
  const [showCompleted, setShowCompleted] = useState(false);

  const filteredProjects = projectsFunded.filter(
    (project) => active === "all" || active === project.category
  );

  const completedFilteredProjects = filteredProjects.filter(
    (project) => !showCompleted || project.status.toLowerCase() === "completed"
  );

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-5xl font-bold">Funded Grants</h1>
      <div className="">
        <ul className="flex gap-3 mt-5">
          <li
            className={`${
              active.toLowerCase() === "all" && "bg-bgSecondary"
            } p-3 rounded-xl cursor-pointer`}
            onClick={() => setActive("all")}
          >
            All
          </li>
          {projectCategory.map((project, index) => (
            <li
              key={index}
              className={`${
                active === project.category && "bg-bgSecondary"
              } p-3 rounded-xl cursor-pointer`}
              onClick={() => setActive(project.category)}
            >
              {project.category}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="text-xs mt-3 flex items-center gap-3 cursor-pointer"
        onClick={() => setShowCompleted(!showCompleted)}
      >
        <Image src={showCompleted ? onButton : offButton} alt="" />
        <p>Show only completed</p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-7 sm:px-0">
        {completedFilteredProjects.length !== 0 ? (
          completedFilteredProjects
            .slice(0, 10)
            .map((project, index) => <Card key={index} {...project} />)
        ) : (
          <div className="flex justify-center">Nothing to display!</div>
        )}
      </div>
    </div>
  );
};

export default FundedGrants;
