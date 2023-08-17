"use client";
import { useContext } from "react";
import { BlogContext } from "@/app/providers/BlogProvider";
import { projectsFunded } from "@/app/components/data/data";

import Link from "next/link";
import Image from "next/image";
import goBack from "public/assets/arrow-left.png";
import adminIcon from "public/assets/admin-user.png";
import Card from "@/app/components/Card";

const BlogSinglePage = () => {
  const { blogData } = useContext(BlogContext);

  if (!blogData) return null;

  const { title, description, date, category, blogRound } = blogData;

  return (
    <div className="flex gap-5 max-w-4xl mx-auto">
      <Link
        href="/blog"
        className="bg-bgSecondary hover:bg-bgSecondary/80 rounded-full h-10 w-10 p-2 hidden md:flex items-center justify-center"
      >
        <Image height={32} width={32} src={goBack} alt="" />
      </Link>
      <div className="w-full sm:px-0 px-4">
        <div className="text-center">
          <div className="text-textSecondary text-sm">
            <p className="text-right">{date}</p>
            <p className="mt-2">{category}</p>
          </div>
          <h2 className="text-5xl mt-3 mb-5 font-bold">
            {title}
            {blogRound}
          </h2>
          <div className="flex justify-center">
            <div>
              <p className="font-semibold mb-2">By:</p>
              <div className="bg-bgSecondary py-2 px-4 rounded-full group cursor-pointer flex items-center gap-3">
                <Image
                  className="rounded-full object-center object-cover w-6 h-6"
                  src={adminIcon}
                  alt="Admin team"
                />
                <span className="font-semibold text-sm">JuGrants Team</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 leading-7">{description}</div>
        <div className="mt-20">
          <h2 className="mb-10 font-bold text-4xl text-center">
            Funded Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projectsFunded
              .filter((round) => round.fundingRound === blogRound)
              .slice(0, 4)
              .map((project) => (
                <Card key={project.title} {...project} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSinglePage;
