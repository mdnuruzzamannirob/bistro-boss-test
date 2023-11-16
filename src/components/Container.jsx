/* eslint-disable react/prop-types */
const Container = ({ children, className }) => {
  return (
    <div
      className={`max-w-screen-2xl mx-5 md:mx-10 xl:mx-auto my-20 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
