import { Parallax } from "react-parallax";

/* eslint-disable react/prop-types */
const Cover = ({ bg, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className={`max-w-screen-2xl mx-auto py-32 bg-fixed`}>
        <div className="text-center w-4/5 mx-auto py-24 space-y-4 bg-black/50 text-white">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-lg font-medium opacity-90">{subTitle}</p>
        </div>
      </div>
    </Parallax>
  );
};
export default Cover;
