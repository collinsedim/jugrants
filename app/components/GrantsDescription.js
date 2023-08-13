const GrantsDescription = ({ title, details }) => {
  return (
    <div className="mb-4">
      <h2 className="my-4 font-bold text-xl">{title}</h2>
      <p className="text-textSecondary">{details}</p>
    </div>
  );
};

export default GrantsDescription;
