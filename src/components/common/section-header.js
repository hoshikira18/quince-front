const SectionHeader = ({ subTitle, title, quote }) => {
  return (
    <div className="text-center">
      <p className="text-lg font-semibold text-secondary">{subTitle}</p>
      <h2 className="text-center text-4xl font-semibold text-fourth">
        {title}
      </h2>
      <p className="mt-2 text-gray-600">{quote}</p>
    </div>
  );
};

export default SectionHeader;
