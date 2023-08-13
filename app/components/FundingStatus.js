export const FundingStatus = ({ bgColor, status }) => {
  return (
    <p
      className={`${bgColor} px-3 py-1 rounded-3xl font-semibold whitespace-nowrap`}
    >
      {status}
    </p>
  );
};
