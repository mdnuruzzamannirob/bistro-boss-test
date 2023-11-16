import Button from "../../components/Button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/* eslint-disable react/prop-types */
const OrderCard = ({ data, orderPrice }) => {
  const { image, name, recipe, price } = data || {};

  return (
    <div className="card bg-base-100 shadow-xl relative">
      <figure>
        <img
          src={image || <Skeleton />}
          alt="image"
          className="rounded-t-xl w-full"
        />
      </figure>

      {orderPrice && (
        <div className="absolute top-5 right-5 badge bg-black badge-lg text-[#BB8506] border-none">
          <h3>${price || <Skeleton />}</h3>
        </div>
      )}
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name || <Skeleton />}</h2>
        <p>{recipe || <Skeleton />}</p>
        <div className="card-actions mt-2">
          <Button title={"add to cart"}></Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
