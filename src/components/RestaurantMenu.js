import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { BIKE_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { motion } from "framer-motion";
import ShimmerCategory from "./ShimmerCategory";
import star from "../assets/star.svg";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerCategory />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    avgRatingString,
    totalRatingsString,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <motion.div
      className="restaurant-menu-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center w-6/12 mt-14 m-auto mb-5 text-white">
        <div>
          <h1 className="text-[22px] font-semibold mb-1 text-white shadow-2xl">
            {name}
          </h1>
          <p className="text-sm font-light text-zinc-300">
            {cuisines.join(", ")}
          </p>
          <p className="text-sm font-light text-zinc-300">
            {areaName}, {sla.lastMileTravelString}
          </p>
          <div className="flex mt-4">
            <img className="mr-2" src={BIKE_URL} alt="img" />
            <p className="text-[14px] font-medium">{sla?.deliveryTime} mins</p>
          </div>
        </div>
        <div className="rounded-md p-2 shadow-2xl bg-zinc-950">
          <div className="flex justify-evenly">
            <img className="w-5 h-5" src={star} alt="" />
            <p className="text-sm font-bold mb-3">{avgRatingString}</p>
          </div>
          <hr />
          <p className="text-[11px] font-semibold mt-3">{totalRatingsString}</p>
        </div>
      </div>

      <hr className="w-[780px] ml-[369px]" />

      <div className="flex w-6/12 m-auto mt-4 ">
        <div className="mr-4 flex justify-center items-center ml-1">
          <svg
            className="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              r="8.35"
              transform="matrix(-1 0 0 1 9 9)"
              stroke="#ffffff"
              strokeWidth="1.3"
            ></circle>
            <path
              d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
              fill="#ffffff"
            ></path>
          </svg>
          <span className="text-[15px] font-bold text-white ml-2">
            {sla.deliveryTime} MINS
          </span>
        </div>
        <div className="flex justify-center items-center">
          <svg
            className="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              cx="9"
              cy="9"
              r="8.25"
              stroke="#ffffff"
              strokeWidth="1.5"
            ></circle>
            <path
              d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
              fill="#ffffff"
            ></path>
          </svg>
          <span className="text-[15px] font-bold text-white ml-2">
            {costForTwoMessage}
          </span>
        </div>
      </div>

      <div className="text-center">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RestaurantMenu;
