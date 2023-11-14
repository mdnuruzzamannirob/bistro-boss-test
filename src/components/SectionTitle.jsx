/* eslint-disable react/prop-types */
const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div>
      <p className="text-[#BB8506] text-center font-light">{subHeading}</p>
      <h3 className="text-2xl text-[#1F2937] font-medium border-y-2 border-[#BB8506] w-fit mx-auto mt-3 mb-10 py-1">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
