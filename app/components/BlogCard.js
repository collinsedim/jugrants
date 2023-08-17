import { useContext } from "react";
import { BlogContext } from "../providers/BlogProvider";
import Link from "next/link";
import { Oxygen_Mono } from "next/font/google";
import { motion } from "framer-motion";

const mono = Oxygen_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-mono",
});

const BlogCard = ({ category, title, date, description, blogRound }) => {
  const { setBlogData } = useContext(BlogContext);

  const handleClick = () => {
    setBlogData({
      category,
      title,
      date,
      description,
      blogRound,
    });
  };

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className="bg-bgSecondary w-80 rounded-3xl overflow-hidden cursor-pointer"
    >
      <Link
        href={`/blog/${title.toLowerCase().replaceAll(" ", "-")}`}
        onClick={handleClick}
      >
        <div className="pattern-grid-md rounded-2xl">
          <div className="bg-slate-900/90 border-[5px] border-bgButton rounded-2xl relative py-10">
            <div className="flex items-center justify-center">
              <div className="">
                <p
                  className={`${mono.className} text-textTertiary text-[10px]`}
                >
                  {category}
                </p>
                <h2 className="text-2xl font-bold max-w-[150px]">{title}</h2>
                <div className="h-24 w-[195px] border-[1px] border-bgButton rounded-full absolute top-10 left-14 -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="mb-20">
            <p className={`${mono.className} text-textTertiary text-xs mb-2`}>
              {category}
            </p>
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <p className={`${mono.className} text-textTertiary text-xs`}>
            {date}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
