/* eslint-disable react/prop-types */
const Button = ({ title }) => {
  return (
    <button className="btn btn-sm bg-[#E8E8E8] hover:bg-[#BB8506]  text-[#BB8506] hover:text-[#E8E8E8] border-0 border-b-4 border-[#BB8506] hover:border-[#E8E8E8] rounded-lg transition-colors duration-500 ease-in-out font-light outline-none">
      {title}
    </button>
  );
};

export default Button;
