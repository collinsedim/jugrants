"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "pattern.css";

import { register } from "swiper/element/bundle";
register();

import Button from "./components/Button";
import Card from "./components/Card";

import { Oxygen_Mono } from "next/font/google";

import right from "/public/assets/right-white.png";
import rightColor from "/public/assets/right.png";
import downArrow from "/public/assets/down-arrow.png";
import SectionIntro from "./components/SectionIntro";

const sectionDescription = {
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
  heading: "Projects built with grants",
  linkText: "View all funded projects",
  linkImg: rightColor,
  link: "/",
};

const whatsNew = {
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  heading: "What's new?",
  linkText: "Read more on our blog",
  linkImg: rightColor,
  link: "/",
};

const mono = Oxygen_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-mono",
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
        <SectionIntro {...whatsNew} />
        <div>
          <div className="mt-14 bg-bgSecondary w-72 rounded-3xl overflow-hidden">
            <div className="pattern-grid-md rounded-2xl">
              <div className="bg-slate-900/90 border-[5px] border-bgButton rounded-2xl py-10">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <p
                      className={`${mono.className} text-textTertiary text-[10px]`}
                    >
                      Funding round
                    </p>
                    <h2 className="text-2xl font-bold">
                      Round 9<br /> of approvals
                    </h2>
                    <div className="h-24 w-[195px] border-[1px] border-bgButton rounded-full absolute -top-1 -left-4 -rotate-12"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="mb-16">
                <p className={`${mono.className} text-textTertiary text-xs`}>
                  Funding round
                </p>
                <h3 className="font-bold text-lg">Round 9 of approvals</h3>
              </div>
              <p className={`${mono.className} text-textTertiary text-xs`}>
                January 1, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* What's New section */}
    </main>
  );
}
