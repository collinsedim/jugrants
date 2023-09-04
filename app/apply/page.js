import GrantApplicationPage from "./apply-page";

export const metadata = {
  title: "Apply for grant",
  description:
    "Fill out the form below to submit your interest for grant opportunity to help boost your your company's growth or startup idea.",
};

const SITE_URL =
  process.env.PROTOCOL + process.env.HOST_DOMAIN + ":" + process.env.HOST_PORT;

const ApplyForGrant = async () => {
  const fetchCategories = async () => {
    try {
      const res = await fetch(`${SITE_URL}/api/categories`, {
        method: "GET",
      });
      const categories = await res.json();
      return categories;
    } catch (error) {
      console.log("Fetch failed", error);
    }
  };

  const getApprovalCriteria = async () => {
    try {
      const res = await fetch(`${SITE_URL}/api/approval-criteria`, {
        method: "GET",
      });
      const appCriteria = await res.json();
      return appCriteria;
    } catch (error) {
      console.error("Failed to fetch approval criteria", error);

      throw new Error("Could not fetch approval criteria");
    }
  };

  const categories = await fetchCategories();
  const approvalCriteria = await getApprovalCriteria();

  return (
    <GrantApplicationPage
      categories={categories}
      approvalCriteria={approvalCriteria}
    />
  );
};

export default ApplyForGrant;
