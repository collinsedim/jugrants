"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "pattern.css";
import { Oxygen_Mono, Kalam } from "next/font/google";

import { register } from "swiper/element/bundle";
register();

import Button from "./components/Button";
import Card from "./components/Card";
import SectionIntro from "./components/SectionIntro";
import WhatsNewCard from "./components/WhatsNewCard";
import Accordion from "./components/Accordion";

import right from "/public/assets/right-white.png";
import rightColor from "/public/assets/right.png";
import downArrow from "/public/assets/down-arrow.png";
import rightArrowLg from "/public/assets/right-arrow-lg.png";

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

const mono = Oxygen_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-mono",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
  display: "swap",
});

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
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Lorem test eedsd",
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "My friend rates",
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Your fire eedsd",
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Grundonsn page",
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Guaridalonsdj eedsd",
    category: "Crowdfund",
    startAmount: "$5,000",
    endAmount: "$6,000",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting     industry. Lorem Ipsum has been the industry's standard dummy text ever     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

export default function Home() {
  const [expanded, setExpanded] = useState();
  return (
    <main className="">
      {/* Hero Section */}
      <div className="max-w-[800px] mx-auto text-center">
        <h1 className="sm:text-6xl text-4xl px-3 font-bold sm:leading-[75px] leading-[60px] tracking-wide">
          Powering the future of JuGrants through community grants
        </h1>
        <div className=" flex justify-center sm:gap-7 gap-5 mt-10 mb-32">
          <Button
            buttonBgColor="bg-bgSecondary"
            buttonLocation="/"
            buttonName="Discover RFPs"
          />
          <Button
            buttonLocation="/"
            buttonBgColor="bg-bgButton"
            buttonName="Apply for grant"
            buttonImg={right}
          />
        </div>
        <div
          className={`flex justify-between mx-auto ${mono.className} text-textTertiary px-3 max-w-2xl`}
        >
          {grantsSummary.map((grant, index) => (
            <div key={index}>
              <p>{grant.digits}</p>
              <p>{grant.title}</p>
            </div>
          ))}
        </div>
        {/* Hero Section */}
        {/* Projects section */}
        <div>
          <div className="flex justify-center my-8">
            <Image src={downArrow} alt="" />
          </div>
          <SectionIntro {...sectionDescription} />
        </div>
      </div>
      <div className="mt-14">
        <Swiper
          slidesPerView="4"
          spaceBetween="100"
          navigation
          pagination
          cssMode
          breakpoints={{
            "@0.35": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.30": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.80": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {projectsFunded.map((project, index) => (
            <SwiperSlide key={index}>
              <Card {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Projects section */}
      {/* What's New section */}
      <div className="mt-36 mb-16">
        <SectionIntro {...whatsNewIntro} />
        <div className="flex justify-center">
          <div className="mt-14 flex sm:flex-row flex-col gap-8 sm:px-0 px-6 max-w-[800px] ">
            {whatsNewCardData.map((whatsNew, index) => (
              <WhatsNewCard key={index} {...whatsNew} />
            ))}
          </div>
        </div>
      </div>
      {/* What's New section */}
      {/* Frequently asked questions section */}
      <div className="mt-32 max-w-[800px] mx-auto">
        <div className="mb-10">
          <SectionIntro {...faqIntro} />
        </div>
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            index={index}
            expanded={expanded}
            setExpanded={setExpanded}
            {...faq}
          />
        ))}
      </div>
      {/* Frequently asked questions section */}
      {/* Application Process */}
      <div className="mt-36 max-w-[800px] mx-auto">
        <div>
          <SectionIntro {...appProcessIntro} />
        </div>
        {/* Application process card/steps */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {appProcessData.map((process, index) => (
            <div
              key={`application-step-${index}`}
              className={` bg-bgSecondary rounded-3xl px-5 py-7 first-of-type:-rotate-3 last-of-type:-rotate-3  last-of-type:-translate-y-4 even:translate-y-4 even:rotate-3 ${kalam.className}`}
            >
              <h3 className="text-3xl">{index + 1}</h3>
              <div className="mt-10">
                <h3 className="mb-4 text-2xl">{process.title}</h3>
                <p>{process.description}</p>
              </div>
            </div>
          ))}
          <Image
            className="absolute left-48 rotate-12"
            src={rightArrowLg}
            alt=""
          />
          <Image
            className="absolute left-72 rotate-12"
            src={rightArrowLg}
            alt=""
          />
        </div>
        {/* Application process card/steps */}
      </div>
      {/* Application Process */}
    </main>
  );
}
