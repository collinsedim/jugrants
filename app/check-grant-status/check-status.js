"use client";
import { useState } from "react";
import { FundingStatus } from "../components/FundingStatus";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GrantStatusPage = () => {
  const [projectInformation, setProjectInformation] = useState([]);
  const [state, setState] = useState({
    email: "",
    statusIdentity: "",
  });
  const [searching, setSearching] = useState(false);

  const handleChange = (name, value) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { email, statusIdentity } = state;

  const notifySuccess = (data) => toast.success(data);
  const notifyError = (data) => toast.error(data);
  const notifyCaution = (data) => toast.info(data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSearching(true);

    const notifySearching = toast.loading("Searching for project...");

    try {
      const getGranteeData = await fetch("/api/projects/project", {
        method: "POST",
        body: JSON.stringify(state),
      });

      if (getGranteeData.status === 200) {
        const grantee = await getGranteeData.json();
        // console.log(grantee);
        setProjectInformation(grantee);
        // notifySuccess("Project found! Scroll down for more details.");
        toast.update(notifySearching, {
          render: "Project found! Scroll down for more details.",
          type: "success",
          isLoading: false,
          autoClose: true,
        });
      } else if (getGranteeData.status === 404) {
        // console.log("No Grantee found");
        toast.update(notifySearching, {
          render: "No Project/Grantee with that ID or email!",
          type: "warning",
          isLoading: false,
          autoClose: true,
        });
      } else {
        // console.log("Something went wrong");
        // notifyError("Something went wrong");
        toast.update(notifySearching, {
          render: "Something went wrong, please retry!",
          type: "error",
          isLoading: false,
          autoClose: true,
        });
      }
    } catch (error) {
      //   notifyError("An error occurred!");
      toast.update(notifySearching, {
        render: "An error occurred!",
        type: "error",
        isLoading: false,
        autoClose: true,
      });
      //   console.error("An error occurred:", error);
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <ToastContainer />
      <h1 className="mb-16 text-center font-bold text-4xl leading-[50px]">
        Check status of your grant application
      </h1>
      <form className="" onSubmit={handleSubmit}>
        <fieldset className="mb-5">
          <label htmlFor="email" className="mb-3 block font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md text-slate-900 font-semibold"
            type="email"
            id="email"
            value={email}
            required
            placeholder="email@mail.com"
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </fieldset>
        <fieldset className="mb-5">
          <label htmlFor="statusId" className="mb-3 block font-semibold">
            Status ID <span className="text-red-500">*</span>
          </label>
          <input
            className="p-2 w-full outline-slate-500 border-2 border-gray-300 rounded-md text-slate-900 font-semibold"
            type="text"
            id="statusId"
            placeholder="d4nSdt_NvUbLiL4Lh9UbD"
            value={statusIdentity}
            required
            onChange={(e) => handleChange("statusIdentity", e.target.value)}
          />
        </fieldset>
        <div className="flex justify-center items-center">
          <button
            disabled={searching}
            className="bg-bgButton font-semibold px-5 py-3 rounded-md disabled:bg-bgButton/50 disabled:cursor-not-allowed shadow-sm shadow-gray-300"
            type="submit"
          >
            {searching ? (
              <div className="flex gap-2">
                Searching...
                <div className="h-6 w-6 border-4 border-t-bgButton rounded-full animate-spin"></div>
              </div>
            ) : (
              "Check Status"
            )}
          </button>
        </div>
      </form>
      {projectInformation.id && (
        <div className="bg-slate-700/60 backdrop-blur-3xl p-5 mt-16 rounded-md">
          <h2 className="text-3xl font-bold text-center mb-5 text-textTertiary">
            Project Information
          </h2>
          <div>
            <div className="flex justify-end ">
              <FundingStatus
                status={projectInformation.grantStatus[0].title}
                bgColor={
                  projectInformation.grantStatus[0].title.toLowerCase() ===
                  "open"
                    ? "bg-bgButton"
                    : projectInformation.grantStatus[0].title.toLowerCase() ===
                      "completed"
                    ? "bg-[#16b57f]"
                    : "bg-[#6966ff]"
                }
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                className="object-cover rounded-full w-[100px] h-[100px] object-center my-3"
                width={100}
                height={100}
                src={projectInformation.owner.photo}
                alt={projectInformation.title}
              />
            </div>
            <div className="flex gap-4 text-base border-b border-gray-700 py-5">
              <p className="text-textTertiary font-semibold">Project title:</p>{" "}
              <span>{projectInformation.title}</span>
            </div>
            <div className="flex gap-4 text-base border-b border-gray-700 py-5">
              <p className="text-textTertiary font-semibold">Description:</p>{" "}
              <span>{projectInformation.description}</span>
            </div>
            <div className="flex gap-4 text-base border-b border-gray-700 py-5">
              <p className="text-textTertiary font-semibold">Purpose:</p>{" "}
              <span>{projectInformation.purpose}</span>
            </div>
            <div className="flex gap-4 text-base border-b border-gray-700 py-5">
              <p className="text-textTertiary font-semibold">Execution:</p>{" "}
              <span>{projectInformation.execution}</span>
            </div>
            <div className="flex gap-4 text-base border-b border-gray-700 py-5">
              <p className="text-textTertiary font-semibold">Date applied:</p>{" "}
              <span>{projectInformation.submitted.slice(0, 10)}</span>
            </div>
            <div className="flex gap-4 text-base border-b border-gray-700 py-5">
              <p className="text-textTertiary font-semibold">Category:</p>{" "}
              <span>{projectInformation.category[0].name}</span>
            </div>
            <div className="flex gap-4 text-base border-b border-gray-700 py-5">
              <p className="text-textTertiary font-semibold">Grantee:</p>{" "}
              <span>{projectInformation.owner.name}</span>
            </div>
            <div className="flex gap-4 text-base border-b border-gray-700 py-5">
              <p className="text-textTertiary font-semibold">Phone:</p>{" "}
              <span>{projectInformation.owner.phone}</span>
            </div>
            <div className="flex gap-4 text-base border-b border-gray-700 py-5">
              <p className="text-textTertiary font-semibold">Approved Grant:</p>{" "}
              <span>{projectInformation.paymentStructure}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrantStatusPage;
