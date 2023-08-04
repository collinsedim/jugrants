import Link from "next/link";

const Button = ({
  buttonImg,
  buttonName,
  buttonNameSpan,
  buttonLocation,
  buttonBgColor,
}) => {
  return (
    <Link href={buttonLocation}>
      <button
        className={`${buttonBgColor} hover:bg-bgButtonHover font-bold p-4 rounded-xl whitespace-nowrap shadow-md`}
      >
        {buttonName}{" "}
        <span className="md:inline-block hidden"> {buttonNameSpan}</span>
        <img src={buttonImg} alt="" />
      </button>
    </Link>
  );
};

export default Button;
