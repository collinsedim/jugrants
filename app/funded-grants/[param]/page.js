"use client";
import { useContext } from "react";
import { GrantsContext } from "@/app/providers/GrantsProvider";
import Link from "next/link";
import Button from "@/app/components/Button";
import { FundingStatus } from "@/app/components/FundingStatus";

import goBack from "public/assets/arrow-left.png";
import Image from "next/image";
import GrantsDescription from "@/app/components/GrantsDescription";

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
  } = fundedGrants;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex gap-8">
        <Link
          href="/funded-grants"
          className="bg-bgSecondary rounded-full h-10 w-10 p-2"
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
            <hr className="my-5 border-2 border-bgSecondary" />
            {/* Project details section */}
            <GrantsDescription title="Description" details={description} />
            {/* End Project details section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGrantsPage;
