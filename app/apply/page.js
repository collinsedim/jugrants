"use client";
import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import Image from "next/image";

// import { projectCategories } from "../components/data/data";

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
  const [expanded, setExpanded] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [projectCategories, setProjectCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await fetch("/api/categories", {
      method: "GET",
    });
    const categories = await res.json();
    setProjectCategories(categories);
    if (categories.length <= 0) {
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const [granteeData, setGranteeData] = useState({
    name: "",
    email: "",
    phone: "",
    photo: null,
    about: "",
    twitter: "",
    website: "",
    github: "",
    linkedin: "",
  });

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    category: 0,
    purpose: "",
    execution: "",
    startAmount: "",
    endAmount: "",
    projectId: "",
  });

  const {
    name,
    email,
    phone,
    photo,
    about,
    website,
    linkedin,
    github,
    twitter,
  } = granteeData;

  const {
    title,
    description,
    category,
    purpose,
    execution,
    startAmount,
    endAmount,
  } = projectData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Create FormData for image upload
    const granteeFormData = new FormData();
    granteeFormData.append("myImage", photo);
    granteeFormData.append("name", name);
    granteeFormData.append("email", email);
    granteeFormData.append("phone", phone);
    granteeFormData.append("about", about);
    granteeFormData.append("website", website);
    granteeFormData.append("linkedin", linkedin);
    granteeFormData.append("github", github);
    granteeFormData.append("twitter", twitter);

    // Submit grantee data to /api/users
    const granteeResponse = await fetch("/api/users", {
      method: "POST",
      body: granteeFormData,
    });

    // Assuming the grantee API response provides an 'id'
    const granteeId = await granteeResponse.json(); // Adjust based on your API response
    // console.log(granteeId);
    // console.log(granteeData);
    // console.log(projectData);
    // return;

    // Prepare project data for submission
    const projectRequestBody = {
      title,
      description,
      category: Number(category),
      purpose,
      execution,
      startAmount,
      endAmount,
      projectId: granteeId, // Assuming this is how you associate the project with the grantee
    };

    // Submit project data to /api/projectData
    const projectResponse = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectRequestBody),
    });

    // console.log("Grantee Response:", granteeResponse);
    // console.log("Project Response:", projectResponse);

    setLoading(false);
  };

  const handleGranteeDataChange = (field, value) => {
    setGranteeData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleProjectDataChange = (field, value) => {
    setProjectData((prevState) => ({
      ...prevState,
      [field]: value,
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
        <form
          encType="multipart/form-data"
          className="max-w-xl mx-auto"
          onSubmit={handleSubmit}
        >
          <fieldset className="mb-8">
            <label htmlFor="name" className="mb-3 block font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="text"
              id="name"
              value={name}
              required
              onChange={(e) => handleGranteeDataChange("name", e.target.value)}
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
              value={email}
              required
              onChange={(e) => handleGranteeDataChange("email", e.target.value)}
            />
          </fieldset>
          <fieldset className="mb-8">
            <label htmlFor="phone" className="mb-1 block font-semibold">
              Phone <span className="text-red-500">*</span>
            </label>
            <p className="mb-3 text-sm">Must include country/dialing code</p>
            <input
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="text"
              id="phone"
              min="8"
              value={phone}
              required
              onChange={(e) => handleGranteeDataChange("phone", e.target.value)}
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
              value={about}
              required
              placeholder={
                name
                  ? `Hi ${name}, tell us something about yourself. We can't wait to meet you!`
                  : `Hi, tell us something about yourself. We can't wait to meet you!`
              }
              onChange={(e) => handleGranteeDataChange("about", e.target.value)}
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
              className="mb-1 p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="url"
              id="website"
              value={website}
              placeholder="Website"
              onChange={(e) =>
                handleGranteeDataChange("website", e.target.value)
              }
            />
            <input
              className="mb-1 p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="url"
              id="github"
              value={github}
              placeholder="Github"
              onChange={(e) =>
                handleGranteeDataChange("github", e.target.value)
              }
            />
            <input
              className="mb-1 p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="url"
              id="twitter"
              value={twitter}
              placeholder="Twitter"
              onChange={(e) =>
                handleGranteeDataChange("twitter", e.target.value)
              }
            />
            <input
              className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md"
              type="url"
              id="linkedIn"
              value={linkedin}
              placeholder="LinkedIn"
              onChange={(e) =>
                handleGranteeDataChange("linkedin", e.target.value)
              }
            />
          </fieldset>
          <fieldset className="mb-8">
            <label>
              <input
                type="file"
                hidden
                onChange={(e) => {
                  handleGranteeDataChange("photo", e.target.files[0]);
                  setSelectedImage(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <div className="w-full bg-gray-300/30 aspect-video rounded-md border-2 border-dashed cursor-pointer flex justify-center items-center">
                {selectedImage ? (
                  <div>
                    <img
                      className="max-h-96 rounded-md my-1"
                      src={selectedImage}
                      alt=""
                    />
                  </div>
                ) : (
                  <span className="font-bold">
                    Select Image <span className="text-red-500">*</span>
                  </span>
                )}
              </div>
            </label>
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
              value={title}
              required
              onChange={(e) => handleProjectDataChange("title", e.target.value)}
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
              value={description}
              required
              placeholder={
                title
                  ? `${title} is a project about...`
                  : `Tell us about your project!`
              }
              onChange={(e) =>
                handleProjectDataChange("description", e.target.value)
              }
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
              value={category}
              onChange={(e) =>
                handleProjectDataChange("category", e.target.value)
              }
            >
              <option className="text-gray-400">select category</option>
              {projectCategories.map((category) => (
                <option value={category.id} key={category.id}>
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
                value={startAmount}
                required
                placeholder="min (e.g, $45,000)"
                onChange={(e) =>
                  handleProjectDataChange("startAmount", e.target.value)
                }
              />
              <input
                className="p-2 outline-slate-500 border-2 border-gray-300 rounded-md w-full"
                type="text"
                id="endAmount"
                value={endAmount}
                required
                placeholder="max (e.g, $96,000)"
                onChange={(e) =>
                  handleProjectDataChange("endAmount", e.target.value)
                }
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
              value={purpose}
              required
              onChange={(e) =>
                handleProjectDataChange("purpose", e.target.value)
              }
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
              value={execution}
              required
              onChange={(e) =>
                handleProjectDataChange("execution", e.target.value)
              }
            ></textarea>
          </fieldset>
          <div className="text-center">
            <button
              disabled={loading}
              className="bg-bgButton rounded-md px-7 py-2 font-bold text-white hover:scale-105 duration-150 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:hover:scale-100"
              type="submit"
            >
              {!loading ? "Apply" : "Processing..."}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GrantApplication;
