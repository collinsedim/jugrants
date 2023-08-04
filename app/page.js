// import Image from "next/image";
import Button from "./components/Button";
import { Oxygen_Mono } from "next/font/google";

const mono = Oxygen_Mono({ subsets: ["latin"], weight: "400" });

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

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <div className="max-w-[800px] mx-auto text-center">
        <div>
          <h1 className="sm:text-6xl text-5xl px-3 font-bold sm:leading-[75px] leading-[65px] ">
            Powering the future of JuGrants through community grants
          </h1>
        </div>
        <div className=" flex justify-center gap-7 mt-10">
          <Button
            buttonBgColor="bg-bgSecondary"
            buttonLocation="/"
            buttonName="Discover RFPs"
          />
          <Button
            buttonLocation="/"
            buttonBgColor="bg-bgButton"
            buttonName="Apply for grant"
          />
        </div>
        <div
          className={`flex justify-between mt-16 ${mono.className} text-textTertiary px-3`}
        >
          {grantsSummary.map((grant, index) => (
            <div key={index}>
              <p>{grant.digits}</p>
              <p>{grant.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Hero Section */}
    </main>
  );
}
