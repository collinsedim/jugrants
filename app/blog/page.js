"use client";
import { useState } from "react";
import { blogData } from "../components/data/data";
import BlogCard from "../components/BlogCard";

const blogCategory = [
  {
    title: "Funding round",
  },
  {
    title: "Spotlight",
  },
  {
    title: "News & updates",
  },
];

const Blog = () => {
  const [active, setActive] = useState("latest");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center font-bold text-5xl mb-10">Blog</h1>
      <div className="flex justify-center">
        <ul className="flex gap-1">
          <li
            className={`${
              active.toLowerCase() === "latest" && "bg-bgSecondary"
            } p-3 rounded-xl cursor-pointer`}
            onClick={() => setActive("latest")}
          >
            Latest
          </li>
          {blogCategory.map((category, index) => (
            <li
              key={index}
              className={`${
                active === category.title && "bg-bgSecondary"
              } p-3 rounded-xl cursor-pointer`}
              onClick={() => setActive(category.title)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        {blogData.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
