/* eslint-disable react/prop-types */
const MenuCard = ({ menu }) => {
  const { recipe, image, name, price } = menu || {};
  return (
    <div className="flex justify-between items-center gap-5">
      <img
        className="rounded-r-full rounded-b-full"
        width={"100px"}
        height={"100px"}
        src={image}
        alt=""
      />
      <di>
        <h3 className="text-xl font-medium mb-1">{name}</h3>
        <p className="opacity-80">{recipe}</p>
      </di>
      <p className="badge badge-lg bg-[#BB8506] font-light text-white">
        ${price}
      </p>
    </div>
  );
};

export default MenuCard;
