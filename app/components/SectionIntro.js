import Link from "next/link";
import Image from "next/image";

const SectionIntro = ({ heading, description, link, linkText, linkImg }) => {
  return (
    <div className="text-center max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-3">{heading}</h2>
      <p className="text-base">{description}</p>
      <div className="flex justify-center items-center mt-5 gap-2 group">
        {link && (
          <Link
            className="text-[#6966ff] hover:text-[#6966ff]/80 font-semibold"
            href={link}
          >
            {linkText}{" "}
          </Link>
        )}
        {linkImg && (
          <Image
            src={linkImg}
            alt=""
            width={16}
            height={16}
            className="group-hover:translate-x-1 duration-150"
          />
        )}
      </div>
    </div>
  );
};

export default SectionIntro;
