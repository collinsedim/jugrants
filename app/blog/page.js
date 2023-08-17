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
  const [page, setPage] = useState(1);
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
      <div className="flex justify-center">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {blogData
            .slice(0, page * 6)
            .map((blog) =>
              active === blog.category ? (
                <BlogCard key={blog.title} {...blog} />
              ) : (
                active === "latest" && <BlogCard key={blog.title} {...blog} />
              )
            )}
        </div>
      </div>
      <div className=" text-center mt-16">
        {page * 6 <= blogData.length ? (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-bgSecondary px-4 py-2 rounded-xl"
          >
            Load more posts
          </button>
        ) : (
          <div className="bg-slate-800/80 p-2 font-semibold">
            No more posts to show!
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
