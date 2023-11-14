/* eslint-disable react/prop-types */

const GridCardContainer = ({ children, className }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default GridCardContainer;
