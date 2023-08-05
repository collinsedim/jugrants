import { Inter, Oxygen_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = Oxygen_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-mono",
});

const grantBeneficiaries = [
  {
    name: "Emem",
    image: "😂",
  },
  {
    name: "Chioma",
    image: "😊",
  },
  {
    name: "Efa",
    image: "😎",
  },
];

const Card = ({ title, description, startAmount, endAmount, category }) => {
  return (
    <div className=" bg-bgSecondary rounded-3xl ">
      <div className="h-[160px] bg-slate-900/95 rounded-3xl"></div>
      <div
        className={`text-left p-6 flex flex-col gap-3 text-sm ${inter.className}`}
      >
        <p className={`${mono.className} text-textTertiary`}>{category}</p>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className={`${mono.className} text-textTertiary`}>
          Funding amount: <span>{startAmount}</span> - <span>{endAmount}</span>
        </p>
        <p className="font-basker">{description}</p>
        <div className="flex">
          {grantBeneficiaries.map((beneficiary, index) => (
            <p className="bg-textSecondary p-3 rounded-full group cursor-pointer border-2 border-slate-800 first-of-type:ml-0 -ml-4 hover:-ml-1">
              {beneficiary.image}
              <span className="ml-2 group-hover:inline-block hidden text-slate-950 font-semibold">
                {beneficiary.name}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
