import rightColor from "/public/assets/right.png";
import discord from "/public/assets/discord-white.png";
import twitter from "/public/assets/twitter-white.png";

// Grantee images
import grantee from "/public/grantee-uploads/grantee.jpg";
import grantee1 from "/public/grantee-uploads/grantee-1.jpg";
import grantee2 from "/public/grantee-uploads/grantee-2.jpg";

// Socials Icon
import twitterIcon from "/public/assets/social/twitter.png";
import githubIcon from "/public/assets/social/github.png";
import websiteIcon from "/public/assets/social/link.png";
import linkedInIcon from "/public/assets/social/linkedin.png";

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

const projectCategories = [
  {
    name: "Technology",
  },
  {
    name: "Social Services",
  },
  {
    name: "Education",
  },
  {
    name: "Healthcare",
  },
  {
    name: "Environment",
  },
  {
    name: "Community",
  },
  {
    name: "Other",
  },
];

const projectsFunded = [
  {
    title: "HR Management Software",
    status: "Funded",
    fundingRound: 9,
    category: "Technology",
    startAmount: "$20,000",
    endAmount: "$25,000",
    description:
      "Develop a comprehensive HR management software tailored for non-governmental organizations. This software will streamline employee onboarding, performance assessment, payroll processing, and reporting.",
    purpose:
      "The HR management software aims to simplify administrative tasks for NGOs, allowing them to focus more on their core missions. It will enhance operational efficiency, data accuracy, and compliance with employment regulations.",
    execution:
      "Estimated project duration is 6 months, including development, testing, and deployment phases. Regular check-ins with stakeholders to ensure alignment.",
    payment_structure: "Payment: 30% upfront / 70% upon successful deployment",
    beneficiary: [
      {
        name: "Alice",
        image: grantee,
        about:
          "This is a placeholder about me text for the grantee. you can find links to the person/company's social profiles, Github, and website. Also, all projects submitted for grant/sponsorship by the this grantee are hightlighted below.",
        links: [
          { url: "#", title: "Twitter", icon: twitterIcon },
          { url: "#", title: "LinkedIn", icon: linkedInIcon },
          { url: "#", title: "GitHub", icon: githubIcon },
          { url: "#", title: "Website", icon: websiteIcon },
        ],
      },
    ],
  },
  {
    title: "Elderly Care Network",
    status: "Completed",
    fundingRound: 8,
    category: "Social Services",
    startAmount: "$18,000",
    endAmount: "$22,000",
    description:
      "Establish a community-driven network to provide support and companionship to elderly individuals. Organize social activities, home visits, and medical assistance for senior citizens.",
    purpose:
      "The elderly care network aimed to address loneliness and isolation among seniors. The project successfully created a supportive community, enhancing the quality of life for elderly members.",
    execution:
      "Project duration was 12 months, including network setup, volunteer training, and ongoing coordination. Collaborated with local senior centers and medical professionals.",
    payment_structure:
      "Payment: Staged payments based on network expansion and activity milestones",
    beneficiary: [
      {
        name: "GoldenAge Connections",
        image: grantee1,
        about:
          "This is a placeholder about me text for the grantee. you can find links to the person/company's social profiles, Github, and website. Also, all projects submitted for grant/sponsorship by the this grantee are hightlighted below.",
        links: [
          { url: "#", title: "Twitter", icon: twitterIcon },
          { url: "#", title: "LinkedIn", icon: linkedInIcon },
          { url: "#", title: "GitHub", icon: githubIcon },
          { url: "#", title: "Website", icon: websiteIcon },
        ],
      },
    ],
  },
  {
    title: "Eco-Friendly Packaging Solution",
    status: "Open",
    fundingRound: 7,
    category: "Environment",
    startAmount: "$10,000",
    endAmount: "$15,000",
    description:
      "Create innovative and sustainable packaging alternatives for businesses. Reduce waste and environment impact by developing biodegradable and reusable packaging materials.",
    purpose:
      "This project aims to revolutionize the packaging industry by providing eco-friendly options that align with sustainability goals. The solution will benefit both businesses and the planet.",
    execution:
      "Expected completion within 8 months, including material research, prototyping, and production trials. Regular consultations with environment experts for best practices.",
    payment_structure:
      "Payment: Milestone-based with a focus on successful prototypes",
    beneficiary: [
      {
        name: "EcoTech Solutions",
        image: grantee,
        about:
          "This is a placeholder about me text for the grantee. you can find links to the person/company's social profiles, Github, and website. Also, all projects submitted for grant/sponsorship by the this grantee are hightlighted below.",
        links: [
          { url: "#", title: "Twitter", icon: twitterIcon },
          { url: "#", title: "LinkedIn", icon: linkedInIcon },
          { url: "#", title: "GitHub", icon: githubIcon },
          { url: "#", title: "Website", icon: websiteIcon },
        ],
      },
    ],
  },
  {
    title: "Rural Education Enhancement",
    status: "Completed",
    fundingRound: 8,
    category: "Education",
    startAmount: "$24,000",
    endAmount: "$30,000",
    description:
      "Improve educational opportunities in rural areas by establishing learning centers, providing resources, and training teachers. Enhance access to quality education for children in underserved communities.",
    purpose:
      "The rural education enhancement project aimed to bridge the education gap in remote areas. The project successfully established learning centers, contributing to increased literacy rates and future prospects.",
    execution:
      "Project was executed over 18 months, involving center setup, curriculum development, and teacher training. Collaborated with local governments and educators to ensure alignment.",
    payment_structure:
      "Payment: Incremental payments tied to learning center milestones and program outcomes",
    beneficiary: [
      {
        name: "BrightHorizon Education Foundation",
        image: grantee2,
        about:
          "This is a placeholder about me text for the grantee. you can find links to the person/company's social profiles, Github, and website. Also, all projects submitted for grant/sponsorship by the this grantee are hightlighted below.",
        links: [
          { url: "#", title: "Twitter", icon: twitterIcon },
          { url: "#", title: "LinkedIn", icon: linkedInIcon },
          { url: "#", title: "GitHub", icon: githubIcon },
          { url: "#", title: "Website", icon: websiteIcon },
        ],
      },
    ],
  },
  {
    title: "Educational Virtual Reality Platform",
    status: "Funded",
    fundingRound: 9,
    category: "Education",
    startAmount: "$30,000",
    endAmount: "$40,000",
    description:
      "Build an immersive virtual reality platform for interactive learning experiences. Engage students with realistic simulations, historical reenactments, and virtual field trips.",
    purpose:
      "The educational VR platform aims to revolutionize traditional learning methods by providing captivating and interactive experiences. It will foster deeper understanding and engagement.",
    execution:
      "Anticipated project duration is 12 months, covering development, content creation, and user testing. Collaborate with educators to ensure alignment with curricular needs.",
    payment_structure: "Payment: Installments based on development milestones",
    beneficiary: [
      {
        name: "EduVR Innovations",
        image: grantee,
        about:
          "This is a placeholder about me text for the grantee. you can find links to the person/company's social profiles, Github, and website. Also, all projects submitted for grant/sponsorship by the this grantee are hightlighted below.",
        links: [
          { url: "#", title: "Twitter", icon: twitterIcon },
          { url: "#", title: "LinkedIn", icon: linkedInIcon },
          { url: "#", title: "GitHub", icon: githubIcon },
          { url: "#", title: "Website", icon: websiteIcon },
        ],
      },
    ],
  },
  {
    title: "Healthcare Accessibility App",
    status: "Open",
    fundingRound: 7,
    category: "Healthcare",
    startAmount: "$15,000",
    endAmount: "$20,000",
    description:
      "Develop a mobile app that connects patients to nearby healthcare services and provides real-time availability information. Enhance access to medical care, especially in remote areas.",
    purpose:
      "The healthcare accessibility app aims to bridge the gap between patients and medical services, ensuring timely access to care and improving health outcomes.",
    execution:
      "Projected completion within 9 months, encompassing app development, integration with healthcare providers, and user testing. Collaborate with medical professionals to ensure accuracy.",
    payment_structure: "Payment: Dependent on app development milestones",
    beneficiary: [
      {
        name: "HealthLink Innovations",
        image: grantee2,
        about:
          "This is a placeholder about me text for the grantee. you can find links to the person/company's social profiles, Github, and website. Also, all projects submitted for grant/sponsorship by the this grantee are hightlighted below.",
        links: [
          { url: "#", title: "Twitter", icon: twitterIcon },
          { url: "#", title: "LinkedIn", icon: linkedInIcon },
          { url: "#", title: "GitHub", icon: githubIcon },
          { url: "#", title: "Website", icon: websiteIcon },
        ],
      },
    ],
  },
  {
    title: "Clean Water Initiative",
    status: "Completed",
    fundingRound: 8,
    category: "Environment",
    startAmount: "$12,000",
    endAmount: "$15,000",
    description:
      "Implement water purification systems in underserved communities to provide access to clean and safe drinking water. Install water filtration units and conduct awareness campaigns on water hygiene.",
    purpose:
      "The clean water initiative aimed to improve public health by addressing waterborne diseases. The project successfully provided clean water sources, reducing health risks and promoting well-being.",
    execution:
      "Project was executed over 9 months, including system setup, community training, and ongoing maintenance. Collaborated with local NGOs for implementation and long-term sustainability.",
    payment_structure:
      "Payment: Phased payments upon completion of key project milestones",
    beneficiary: [
      {
        name: "PureFlow Foundation",
        image: grantee,
        about:
          "This is a placeholder about me text for the grantee. you can find links to the person/company's social profiles, Github, and website. Also, all projects submitted for grant/sponsorship by the this grantee are hightlighted below.",
        links: [
          { url: "#", title: "Twitter", icon: twitterIcon },
          { url: "#", title: "LinkedIn", icon: linkedInIcon },
          { url: "#", title: "GitHub", icon: githubIcon },
          { url: "#", title: "Website", icon: websiteIcon },
        ],
      },
    ],
  },
  {
    title: "Community Garden Initiative",
    status: "Funded",
    fundingRound: 9,
    category: "Community",
    startAmount: "$5,000",
    endAmount: "$8,000",
    description:
      "Establish community gardens in urban areas to promote sustainable agriculture and provide fresh produce to residents. Develop educational programs and workshops for garden maintenance.",
    purpose:
      "The community garden initiative aims to create green spaces in cities, fostering local food production, community engagement, and environment awareness.",
    execution:
      "Envisioned completion within 6 months, including garden setup, planting, and educational program development. Work closely with local organizations and residents for successful implementation.",
    payment_structure:
      "Payment: Milestone-based according to garden development stages",
    beneficiary: [
      {
        name: "GreenHarvest Foundation",
        image: grantee2,
        about:
          "This is a placeholder about me text for the grantee. you can find links to the person/company's social profiles, Github, and website. Also, all projects submitted for grant/sponsorship by the this grantee are hightlighted below.",
        links: [
          { url: "#", title: "Twitter", icon: twitterIcon },
          { url: "#", title: "LinkedIn", icon: linkedInIcon },
          { url: "#", title: "GitHub", icon: githubIcon },
          { url: "#", title: "Website", icon: websiteIcon },
        ],
      },
    ],
  },
  {
    title: "AI-Powered Language Learning",
    status: "Open",
    fundingRound: 7,
    category: "Education",
    startAmount: "$25,000",
    endAmount: "$35,000",
    description:
      "Create an AI-driven language learning platform that offers personalized lessons, real-time pronunciation feedback, and adaptive curriculum. Empower users to learn new languages effectively.",
    purpose:
      "The AI language learning platform aims to make language acquisition accessible and efficient for learners of all ages. It will utilize cutting-edge technology to enhance language skills.",
    execution:
      "Estimated completion in 10 months, including platform development, integration of AI algorithms, and testing. Collaborate with linguists to ensure linguistic accuracy.",
    payment_structure:
      "Payment: Staged payments aligned with key development milestones",
    beneficiary: [
      {
        name: "EduVR Innovations",
        image: grantee,
        about:
          "This is a placeholder about me text for the grantee. you can find links to the person/company's social profiles, Github, and website. Also, all projects submitted for grant/sponsorship by the this grantee are hightlighted below.",
        links: [
          { url: "#", title: "Twitter", icon: twitterIcon },
          { url: "#", title: "LinkedIn", icon: linkedInIcon },
          { url: "#", title: "GitHub", icon: githubIcon },
          { url: "#", title: "Website", icon: websiteIcon },
        ],
      },
    ],
  },
  {
    title: "Digital Mental Health Platform",
    status: "Funded",
    fundingRound: 9,
    category: "Healthcare",
    startAmount: "$30,000",
    endAmount: "$45,000",
    description:
      "Build a comprehensive digital platform that offers mental health resources, therapy sessions, and peer support. Enhance access to mental health care and destigmatize seeking help.",
    purpose:
      "The digital mental health platform aims to address the growing need for mental health support by providing a secure and user-friendly online environment for individuals to seek help.",
    execution:
      "Anticipated project duration is 12 months, covering platform development, content creation, and user testing. Collaboration with mental health professionals for accurate and ethical guidance.",
    payment_structure:
      "Payment: Progressive payments tied to platform development stages",
    beneficiary: [
      {
        name: "MindWellness Hub",
        image: grantee1,
        about:
          "This is a placeholder about me text for the grantee. you can find links to the person/company's social profiles, Github, and website. Also, all projects submitted for grant/sponsorship by the this grantee are hightlighted below.",
        links: [
          { url: "#", title: "Twitter", icon: twitterIcon },
          { url: "#", title: "LinkedIn", icon: linkedInIcon },
          { url: "#", title: "GitHub", icon: githubIcon },
          { url: "#", title: "Website", icon: websiteIcon },
        ],
      },
    ],
  },
  {
    title: "Sustainable Energy Innovations",
    status: "Open",
    fundingRound: 7,
    category: "Environment",
    startAmount: "$50,000",
    endAmount: "$70,000",
    description:
      "Research and develop innovative solutions for sustainable energy generation, storage, and distribution. Contribute to the transition to renewable energy sources and reduction of carbon emissions.",
    purpose:
      "The sustainable energy innovations project aims to accelerate the adoption of clean energy technologies, driving environment conservation and reducing dependence on fossil fuels.",
    execution:
      "Expected completion in 18 months, including research, prototyping, and testing of energy solutions. Collaboration with energy experts and regulatory bodies for successful integration.",
    payment_structure:
      "Payment: Milestone-based payments linked to technological advancements",
    beneficiary: [
      {
        name: "EcoEnergy Solutions",
        image: grantee,
        about:
          "This is a placeholder about me text for the grantee. you can find links to the person/company's social profiles, Github, and website. Also, all projects submitted for grant/sponsorship by the this grantee are hightlighted below.",
        links: [
          { url: "#", title: "Twitter", icon: twitterIcon },
          { url: "#", title: "LinkedIn", icon: linkedInIcon },
          { url: "#", title: "GitHub", icon: githubIcon },
          { url: "#", title: "Website", icon: websiteIcon },
        ],
      },
    ],
  },
];

const projectsFundedIntro = {
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
  heading: "Projects built with grants",
  linkText: "View all funded projects",
  linkImg: rightColor,
  link: "/funded-grants",
};

const whatsNewIntro = {
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  heading: "What's new?",
  linkText: "Read more on our blog",
  linkImg: rightColor,
  link: "/blog",
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

const blogData = [
  {
    category: "Spotlight",
    blogRound: 10,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    title: "Round 10 of approvals",
    date: "August 2, 2023",
  },
  {
    category: "Funding round",
    blogRound: 9,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    title: "Round 9 of approvals",
    date: "August 6, 2023",
  },
  {
    category: "Funding round",
    blogRound: 8,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    title: "Round 8 of approvals",
    date: "August 2, 2023",
  },
  {
    category: "News & updates",
    blogRound: 7,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    title: "Round 7 of approvals",
    date: "August 2, 2023",
  },
  {
    category: "Spotlight",
    blogRound: 6,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    title: "Round 6 of approvals",
    date: "August 2, 2023",
  },
  {
    category: "News & updates",
    blogRound: 5,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    title: "Round 5 of approvals",
    date: "August 2, 2023",
  },
  {
    category: "Funding round",
    blogRound: 4,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    title: "Round 4 of approvals",
    date: "August 6, 2023",
  },
  {
    category: "Spotlight",
    blogRound: 3,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    title: "Round 3 of approvals",
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
  blogData,
  whatsNewIntro,
  projectsFundedIntro,
  projectCategories,
};
