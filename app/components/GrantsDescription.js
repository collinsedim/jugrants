const GrantsDescription = ({ title, details }) => {
  return (
    <div className="mb-10">
      <h2 className="my-2 font-bold text-xl">{title}</h2>
      <p className="text-textSecondary">{details}</p>
    </div>
  );
};

export default GrantsDescription;
