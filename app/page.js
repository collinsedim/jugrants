"use client";
// import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import "swiper/css/bundle";
import SwiperCore, { Navigation } from "swiper";

import { register } from "swiper/element/bundle";
register();

import Button from "./components/Button";
import Card from "./components/Card";

import { Oxygen_Mono } from "next/font/google";

import right from "/public/assets/right-white.png";
import rightColor from "/public/assets/right.png";
import downArrow from "/public/assets/down-arrow.png";

// const swiper = new Swiper(".swiper", {
//   spaceBetween: 280,
//   navigation: true,
//   slidesPerView: 1,
//   breakpointsBase: "window",
// });

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
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">
              Projects built with grants
            </h2>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it
            </p>
            <div className="flex justify-center items-center mt-5 gap-2 group">
              <Link
                className="text-[#6966ff] hover:text-[#6966ff]/80 font-semibold"
                href="#"
              >
                View all funded projects{" "}
              </Link>
              <Image
                src={rightColor}
                alt=""
                width={16}
                height={16}
                className="group-hover:translate-x-1 duration-150"
              />
            </div>
          </div>
        </div>
        {/* Projects section */}
      </div>
      {/* <swiper-container
        slides-per-view="4"
        css-mode="true"
        space-between="280"
        break-points-base="windows"
      >
        <div className="swiper mt-14 ml-14 flex gap-4">
          {projectsFunded.map((project, index) => (
            <swiper-slide key={index}>
              <swiper-navigation>
                <Card {...project} />
              </swiper-navigation>
            </swiper-slide>
          ))}
        </div>
      </swiper-container> */}
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
    </main>
  );
}
