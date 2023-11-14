/* eslint-disable react/prop-types */
const GridContainer = ({ children, className }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 ${className}`}>
      {children}
    </div>
  );
};

export default GridContainer;
