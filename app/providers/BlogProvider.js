import { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogData, setBlogData] = useState(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("blogData");
      return storedData ? JSON.parse(storedData) : null;
    }
    return null;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("blogData", JSON.stringify(blogData));
    }
  }, [blogData]);

  return (
    <BlogContext.Provider value={{ blogData, setBlogData }}>
      {children}
    </BlogContext.Provider>
  );
};
