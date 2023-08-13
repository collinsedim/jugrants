"use client";
import { useContext } from "react";
import { GrantsContext } from "@/app/providers/GrantsProvider";
import Link from "next/link";
import Button from "@/app/components/Button";
import { FundingStatus } from "@/app/components/FundingStatus";

import goBack from "public/assets/arrow-left.png";
import arrowRightColor from "public/assets/right.png";
import externalLinkIcon from "public/assets/external-link.png";
import Image from "next/image";
import GrantsDescription from "@/app/components/GrantsDescription";
import SectionIntro from "@/app/components/SectionIntro";
import { projectsFunded } from "@/app/components/data/data";
import Card from "@/app/components/Card";

const SingleGrantsPage = () => {
  const { fundedGrants } = useContext(GrantsContext);

  if (!fundedGrants) {
    return null;
  }

  const {
    title,
    description,
    startAmount,
    endAmount,
    category,
    status,
    beneficiary,
    purpose,
    execution,
    payment_structure,
  } = fundedGrants;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex gap-8">
        <Link
          href="/funded-grants"
          className="bg-bgSecondary hover:bg-bgSecondary/80 rounded-full h-10 w-10 p-2 flex items-center justify-center"
        >
          <Image height={32} width={32} src={goBack} alt="" />
        </Link>
        <div className="w-full">
          <div>
            <p className="text-xs">{category}</p>
            <h1 className="sm:text-5xl text-4xl font-bold my-4 sm:max-w-[80%] max-w-[95%]">
              {title}
            </h1>
            <div className="flex flex-wrap justify-between sm:gap-y-0 gap-y-4">
              <div className="flex items-center gap-5">
                <FundingStatus
                  bgColor={
                    status.toLowerCase() === "open"
                      ? "bg-[#6966ff]"
                      : "bg-[#16b57f]"
                  }
                  status={
                    status.toLowerCase() === "completed" ||
                    status.toLowerCase() === "funded"
                      ? status + " ✓"
                      : status
                  }
                />
                <p className="text-textTertiary">
                  Funding amount:{" "}
                  <span className="text-white">{startAmount}</span>{" "}
                </p>
              </div>
              <Button
                buttonBgColor="bg-bgButton"
                buttonLocation="#"
                buttonName="Project link"
                buttonImg={externalLinkIcon}
              />
            </div>
            {/* Team section */}
            <div>
              <p className="font-bold mb-3 mt-10">Team</p>
              <div className="flex gap-3 flex-wrap">
                {beneficiary.map((person) => (
                  <div
                    key={person.name}
                    className="bg-bgSecondary p-3 rounded-full group cursor-pointer flex gap-2"
                  >
                    <p className="">{person.image}</p>
                    <span className="font-semibold">{person.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* End Team section */}
          </div>
        </div>
      </div>
      <div className="sm:px-0 px-3">
        <hr className="my-5 border-2 border-bgSecondary" />
        {/* Project details section */}
        <GrantsDescription title="Description" details={description} />
        <GrantsDescription title="Purpose" details={purpose} />
        <GrantsDescription title="Execution" details={execution} />
        <GrantsDescription
          title="Payment Structure"
          details={payment_structure}
        />
        {/* End Project details section */}
        <div className="mt-36">
          <SectionIntro
            heading="More grants like this"
            link="#"
            linkText="View all similar projects"
            linkImg={arrowRightColor}
          />
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {projectsFunded
            .filter(
              (project) =>
                project.category === category && project.title !== title
            )
            .slice(0, 2)
            .map((project) => (
              <Card key={project.title} {...project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleGrantsPage;
