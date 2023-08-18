"use client";
import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";

import { projectCategories } from "../components/data/data";

const grantCriteria = [
  {
    title: "Relevance",
    description: "Lorem",
  },
  {
    title: "Benefit",
    description: "Lorem",
  },
  {
    title: "Feasibility",
    description: "Lorem",
  },
  {
    title: "Execution",
    description: "Lorem",
  },
  {
    title: "Qualification",
    description: "Lorem",
  },
  {
    title: "Originality",
    description: "Lorem",
  },
  {
    title: "Cost",
    description: "Lorem",
  },
];

const GrantApplication = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    aboutYou: "",
    additional_links: {
      twitter: "",
      website: "",
      github: "",
      linkedIn: "",
    },
    title: "",
    description: "",
    category: "",
    purpose: "",
    execution: "",
    startAmount: "",
    endAmount: "",
  });

  // const [tempUsers, setTempUsers] = useState([]);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await fetch("/api/users", { method: "GET" });
  //     const data = await response.json();
  //     setTempUsers(data);
  //   } catch (error) {
  //     console.log("Unable to fetch users");
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // console.log(tempUsers);

  const [expanded, setExpanded] = useState();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitting(true);

    console.log(state);

    setSubmitting(false);

    setState({
      name: "",
      email: "",
      aboutYou: "",
      additional_links: {
        twitter: "",
        website: "",
        github: "",
        linkedIn: "",
      },
      title: "",
      description: "",
      category: "",
      purpose: "",
      execution: "",
      startAmount: "",
      endAmount: "",
    });
  };

  const handleChange = (e, field, linkName) => {
    setState((prevState) => ({
      ...prevState,
      [field]:
        field === "additional_links"
          ? { ...prevState[field], [linkName]: e.target.value }
          : e.target.value,
    }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-5">Apply for a grant</h1>
        <p className="text-textSecondary text-sm">
          Please complete the application below for Grant consideration!
        </p>
      </div>
      {/* Grants selection criteria */}
      <div>
        <h3 className="font-semibold text-xl mb-4">How are grants selected?</h3>
        <p className="text-textSecondary">
          When assessing applications, the Grants team follows standard criteria
          using the questions below to guide our decision making.
        </p>
        <div className="mt-10">
          {grantCriteria.map((criteria, index) => (
            <Accordion
              key={index}
              title={criteria.title}
              faq={criteria.description}
              index={index}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </div>
      </div>
      {/* Grants selection criteria */}
      <h2 className="text-2xl font-bold mt-16">Grant application</h2>
      <div className="w-full bg-slate-100 text-slate-900 mt-5 rounded-md py-14 px-5">
        <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
          <fieldset className="mb-8">
            <label htmlFor="name" className="mb-3 block font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="text"
              id="name"
              value={state.name}
              required
              onChange={(e) => handleChange(e, "name")}
            />
          </fieldset>
          <fieldset className="mb-8">
            <label htmlFor="email" className="mb-1 block font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <p className="mb-3 text-sm">
              Primary contact, if applying as a team/company
            </p>
            <input
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="email"
              id="email"
              value={state.email}
              required
              onChange={(e) => handleChange(e, "email")}
            />
          </fieldset>
          <fieldset className="mb-8">
            <label htmlFor="about" className="mb-1 block font-semibold">
              About You <span className="text-red-500">*</span>
            </label>
            <p className="mb-3 text-sm">Tell us about yourself/ your team</p>
            <textarea
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md resize-none h-28"
              id="about"
              value={state.aboutYou}
              required
              placeholder={
                state.name
                  ? `Hi ${state.name}, tell us something about yourself. We can't wait to meet you!`
                  : `Hi, tell us something about yourself. We can't wait to meet you!`
              }
              onChange={(e) => handleChange(e, "aboutYou")}
            ></textarea>
          </fieldset>
          <fieldset className="mb-8">
            <label className="mb-1 block font-semibold">Additional links</label>
            <p className="mb-3 text-sm">
              If useful, please share any links about you/your project (e.g,
              Github, Website, Twitter (X)). Must include{" "}
              <span className="text-red-500">https://</span>
            </p>
            <input
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="url"
              id="website"
              value={state.additional_links.website}
              placeholder="Website"
              onChange={(e) => handleChange(e, "additional_links", "website")}
            />
            <input
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="url"
              id="github"
              value={state.additional_links.github}
              placeholder="Github"
              onChange={(e) => handleChange(e, "additional_links", "github")}
            />
            <input
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="url"
              id="twitter"
              value={state.additional_links.twitter}
              placeholder="Twitter"
              onChange={(e) => handleChange(e, "additional_links", "twitter")}
            />
            <input
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="url"
              id="linkedIn"
              value={state.additional_links.linkedIn}
              placeholder="LinkedIn"
              onChange={(e) => handleChange(e, "additional_links", "linkedIn")}
            />
          </fieldset>
          <hr className="mb-8" />
          <fieldset className="mb-8">
            <label htmlFor="title" className="mb-3 block font-semibold">
              Project Title <span className="text-red-500">*</span>
            </label>
            <input
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="text"
              id="title"
              value={state.title}
              required
              onChange={(e) => handleChange(e, "title")}
            />
          </fieldset>
          <fieldset className="mb-8">
            <label htmlFor="description" className="mb-1 block font-semibold">
              Description <span className="text-red-500">*</span>
            </label>
            <p className="mb-3 text-sm">Tell us about your Project</p>
            <textarea
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md resize-none h-28"
              id="description"
              value={state.description}
              required
              placeholder={
                state.title
                  ? `${state.title} is a project about...`
                  : `Tell us about your project!`
              }
              onChange={(e) => handleChange(e, "description")}
            ></textarea>
          </fieldset>
          <fieldset className="mb-8">
            <label htmlFor="category" className="mb-3 block font-semibold">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              id="category"
              required
              value={!state.category === "select category" && state.category}
              onChange={(e) => handleChange(e, "category")}
            >
              <option className="text-gray-400">select category</option>
              {projectCategories.map((category) => (
                <option value={category.name} key={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className="mb-8">
            <label htmlFor="startAmount" className="mb-3 block font-semibold">
              Expected Grant Amount <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-3">
              <input
                className="p-2 outline-slate-500 border-2 border-gray-300 rounded-md w-full"
                type="text"
                id="startAmount"
                value={state.startAmount}
                required
                placeholder="min (e.g, $45,000)"
                onChange={(e) => handleChange(e, "startAmount")}
              />
              <input
                className="p-2 outline-slate-500 border-2 border-gray-300 rounded-md w-full"
                type="text"
                id="endAmount"
                value={state.endAmount}
                required
                placeholder="max (e.g, $96,000)"
                onChange={(e) => handleChange(e, "endAmount")}
              />
            </div>
          </fieldset>
          <fieldset className="mb-8">
            <label htmlFor="purpose" className="mb-1 block font-semibold">
              Purpose <span className="text-red-500">*</span>
            </label>
            <p className="mb-3 text-sm">
              What is the purpose of this project, and why you need the grant
            </p>
            <textarea
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md resize-none h-28"
              id="purpose"
              value={state.purpose}
              required
              onChange={(e) => handleChange(e, "purpose")}
            ></textarea>
          </fieldset>
          <fieldset className="mb-8">
            <label htmlFor="execution" className="mb-1 block font-semibold">
              Execution <span className="text-red-500">*</span>
            </label>
            <p className="mb-3 text-sm">
              How do you intend to execute the project, if your request for a
              grant is approved?
            </p>
            <textarea
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md resize-none h-28"
              id="execution"
              value={state.execution}
              required
              onChange={(e) => handleChange(e, "execution")}
            ></textarea>
          </fieldset>
          <div className="text-center">
            <button
              className="bg-bgButton rounded-md px-7 py-2 font-bold text-white hover:scale-105 duration-150"
              type="submit"
            >
              {!submitting ? "Apply" : "Submitting..."}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GrantApplication;
