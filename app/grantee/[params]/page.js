"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { GrantsContext } from "@/app/providers/GrantsProvider";
import { projectsFunded } from "@/app/components/data/data";

import goBack from "public/assets/arrow-left.png";
import GrantsDescription from "@/app/components/GrantsDescription";
import Card from "@/app/components/Card";

const Grantee = () => {
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

  console.log(beneficiary);

  return (
    <div className="flex gap-7 max-w-4xl mx-auto">
      <Link
        href={`/funded-grants/${title.toLowerCase().replaceAll(" ", "-")}`}
        className="bg-bgSecondary hover:bg-bgSecondary/80 rounded-full h-10 w-10 p-2 md:flex hidden items-center justify-center"
      >
        <Image
          placeholder="blur"
          priority={true}
          className="w-full h-full"
          src={goBack}
          alt=""
        />
      </Link>
      {beneficiary.map((grantee) => (
        <div key={grantee.name} className="w-full">
          <div className="flex justify-center items-center flex-col">
            <Image
              placeholder="blur"
              priority={true}
              src={grantee.image}
              alt={grantee.name}
              className="w-52 h-52 object-cover object-center rounded-full"
            />
            <h2 className="mt-5 mb-10 sm:text-4xl text-3xl font-bold text-center">
              {grantee.name}
            </h2>
          </div>
          <div className="sm:px-0 px-3">
            {grantee.about && (
              <GrantsDescription title="About" details={grantee.about} />
            )}
            {grantee.links && (
              <div>
                <h3 className="text-xl font-bold mb-5">Links</h3>
                <div className="flex gap-3 flex-wrap">
                  {grantee.links.map((link) => (
                    <Link
                      href={link.url}
                      className="bg-bgSecondary px-4 py-2 rounded-full group cursor-pointer flex items-center gap-4"
                    >
                      <Image
                        className="w-8 h-8 p-1"
                        src={link.icon}
                        alt={link.title}
                      />
                      <p className="font-semibold">{link.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {!grantee.about && !grantee.links && (
              <div className="mt-5 p-4 font-semibold bg-gradient-to-b from-slate-600 to-slate-950/90 group">
                <span className="group-hover:animate-ping">⚠️</span> Sorry,{" "}
                {grantee.name} did not share any information about themselves!{" "}
                <span className="group-hover:animate-ping">⚠️</span>
              </div>
            )}
            <h2 className="mt-32 mb-16 text-center text-4xl font-bold">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {projectsFunded
                .filter((project) => {
                  const granteeProjects = project.beneficiary.some(
                    (granteeProject) => granteeProject.name === grantee.name
                  );
                  return granteeProjects;
                })
                .slice(0, 2)
                .map((project) => (
                  <Card key={project.title} {...project} />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grantee;
