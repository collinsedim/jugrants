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
import downArrow from "/public/assets/down-arrow.png";
import rightArrowLg from "/public/assets/right-arrow-lg.png";

import {
  sectionDescription,
  whatsNewCardData,
  whatsNewIntro,
  faqData,
  faqIntro,
  appProcessData,
  appProcessIntro,
  grantsSummary,
  projectsFunded,
} from "./components/data/data";

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

export default function Home() {
  const [expanded, setExpanded] = useState();
  return (
    <main>
      {/* Hero Section */}
      <div className="max-w-[800px] mx-auto text-center">
        <h1 className="sm:text-6xl text-4xl px-3 font-bold sm:leading-[75px] leading-[60px] tracking-wide">
          Powering the future of JuGrants through community grants
        </h1>
        <div className="flex justify-center sm:gap-7 gap-5 mt-10 sm:mb-32 mb-12">
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
          className={`flex sm:flex-row flex-col sm:gap-0 gap-11 justify-between text-lg mx-auto ${mono.className} text-textTertiary px-3 max-w-2xl`}
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
          {projectsFunded.slice(0, 8).map((project, index) => (
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
          <div className="mt-14 flex md:flex-row flex-col gap-8 sm:px-0 px-6 max-w-[800px] ">
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
      <div className="mt-36 max-w-5xl mx-auto lg:px-0 md:px-36 sm:px-20 px-5">
        <div>
          <SectionIntro {...appProcessIntro} />
        </div>
        {/* Application process card/steps */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-10 relative">
          {appProcessData.map((process, index) => (
            <div
              key={`application-step-${index}`}
              className={` bg-bgSecondary rounded-3xl px-5 pt-7 pb-28 first-of-type:-rotate-3 last-of-type:-rotate-3  lg:last-of-type:-translate-y-4 last-of-type:translate-y-4 even:translate-y-4 even:rotate-3  ${kalam.className}`}
            >
              <h3 className="text-3xl">{index + 1}</h3>
              <div className="mt-10">
                <h3 className="mb-4 text-2xl">{process.title}</h3>
                <p>{process.description}</p>
              </div>
            </div>
          ))}
          {/* This image comes first on desktop devices */}
          <Image
            className="absolute lg:-top-8 lg:left-64 lg:rotate-12 sm:top-[680px] top-[730px] rotate-90 lg:scale-y-[1] scale-y-[-1] -left-12"
            src={rightArrowLg}
            alt=""
          />
          {/* While this image comes first on mobile devices */}
          <Image
            className="absolute lg:bottom-1 lg:scale-y-[-1] lg:right-64 lg:-rotate-12 lg:scale-x-[1] scale-x-[-1] scale-y-[-1] -rotate-90 lg:top-72 sm:top-72 top-80"
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
