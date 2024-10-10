import { CDN_URL } from "../utils/constants";
import star from "../assets/verified.svg";
import { motion } from "framer-motion";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.1 }}
      className="w-60 h-[300px] hover:shadow-2xl hover:shadow-green-400 flex flex-col gap-4 items-center drop-shadow-xl text-lg hover:cursor-pointer bg-gradient-to-br from-green-700 to-green-400 pt-4 transition ease-in delay-150 hover:scale-95 rounded-t-full"
    >
      <div>
        <img
          className="w-48 h-48 rounded-full object-cover drop-shadow-xl border p-1 transition ease-in delay-150"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
      </div>

      <div className="flex flex-col p-4 text-white justify-center text-center items-center w-[241px] bg-zinc-800 rounded-br-lg rounded-bl-lg">
        <div className="flex w-60 justify-center items-center">
          <span className="w-60 font-semibold text-lg truncate px-4">
            {name}
          </span>
        </div>
        <h4 className="font-extralight truncate text-sm w-44 text-zinc-400">
          {cuisines?.join(", ")}
        </h4>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex justify-start items-center gap-1">
            <img src={star} alt="star" className="w-4 h-4" />
            <p className="text-base font-normal">{avgRating}</p>
          </div>
          |<h4 className="text-base font-normal">{costForTwo}</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className=" relative  transition-all hover:scale-95 delay-150">
        <label className="z-40 bg-[#FF0000] rounded-full -top-4 text-white w-auto p-2 font-semibold absolute right-[83px] drop-shadow-2xl">
          {props?.resData?.info?.aggregatedDiscountInfoV3?.header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
