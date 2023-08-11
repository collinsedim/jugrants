import rightColor from "/public/assets/right.png";
import discord from "/public/assets/discord-white.png";
import twitter from "/public/assets/twitter-white.png";

// Main page data

const grantsSummary = [
  {
    title: "projects funded",
    digits: "100+",
  },
  {
    title: "awarded",
    digits: "$3+ million",
  },
  {
    title: "under review",
    digits: "84+ projects",
  },
];

const projectsFunded = [
  {
    title: "Funding rates page",
    status: "Funded",
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Lorem test eedsd",
    status: "Open",
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "My friend rates",
    status: "Completed",
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Your fire eedsd",
    status: "Funded",
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Grundonsn page",
    status: "Completed",
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Guaridalonsdj eedsd",
    status: "Open",
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

const sectionDescription = {
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
  heading: "Projects built with grants",
  linkText: "View all funded projects",
  linkImg: rightColor,
  link: "/",
};

const whatsNewIntro = {
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  heading: "What's new?",
  linkText: "Read more on our blog",
  linkImg: rightColor,
  link: "/",
};

const faqIntro = {
  heading: "Frequently asked questions",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
};

const appProcessIntro = {
  heading: "Application process",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
};

const whatsNewCardData = [
  {
    fRound: "Funding round",
    title: "Round 9",
    titleBreak: "of approvals",
    titleFull: "Round 9 of approvals",
    date: "August 6, 2023",
  },
  {
    fRound: "Funding round",
    title: "Round 8",
    titleBreak: "of approvals",
    titleFull: "Round 8 of approvals",
    date: "August 2, 2023",
  },
];

const faqData = [
  {
    title: "How do I apply?",
    faq: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    title: "Can I apply as a U.S. based person/company?",
    faq: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    title: "How will I be compensated?",
    faq: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    title: "What type of project will qualify for a Grant?",
    faq: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    title: "What is the application timeline? When can I expect to hear back?",
    faq: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    title: "How can I increase my chances of getting funded?",
    faq: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
  {
    title: "How often do you approve new Rounds of funding?",
    faq: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  },
];

const appProcessData = [
  {
    title: "Apply",
    description:
      "Submit a complete application to the JuGrants team, including as many details as possible about the proposed idea and their background.",
  },
  {
    title: "Interview",
    description:
      "If your application is selected, the JuGrants team will conduct 1-2 interviews to collect more information on the Applicant's background and the proposal.",
  },
  {
    title: "Grant offer",
    description:
      "The JuGrants team will determine if the proposal fits into the grant program. A vesting schedule and timeline for product development reports will also be determined in the offer.",
  },
];
// End Main page data

// Layout Data
const headerMenu = [
  {
    title: "Discover initatives",
    link: "/discover-initiatives",
  },
  {
    title: "Funded grants",
    link: "/funded-grants",
  },
  {
    title: "Program expenses",
    link: "/program-expenses",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
];

const footerMenu = [
  {
    title: "About",
  },
  {
    title: "FAQ",
  },
  {
    title: "Brand assets",
  },
  {
    title: "JuGrant Foundation",
  },
  {
    title: "JuGrant trading",
  },
];

const socialProfiles = [
  {
    icon: discord,
    social: "Discord",
  },
  {
    icon: twitter,
    social: "Twitter",
  },
];
// End Layout Data

// Grants Application page
const pageIntro = {
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
  heading: "Discover initiatives (RFPs)",
};

const statuses = [
  {
    title: "Open",
  },
  {
    title: "Funded",
  },
  {
    title: "Completed",
  },
];
// Grants Application page

export {
  statuses,
  pageIntro,
  headerMenu,
  footerMenu,
  socialProfiles,
  projectsFunded,
  grantsSummary,
  appProcessData,
  appProcessIntro,
  faqData,
  faqIntro,
  whatsNewCardData,
  whatsNewIntro,
  sectionDescription,
};
