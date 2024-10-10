import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { motion } from "framer-motion";
import diarrow from "../assets/diarrow.svg";
import verified from "../assets/verified.svg";
import sticks from "../assets/sticks.svg";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setListofRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(error);
    }
  };

  const EnhancedComponent = WithPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="text-5xl text-center mt-60 bg-gradient-to-tl from-stone-900 to-purple-700 bg-clip-text text-transparent p-5 font-bold"
      >
        Check your internet connection
      </motion.h1>
    );
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return listofRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full mr-40">
      <motion.div
        className="flex items-center mt-10 justify-center gap-5 mb-3"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex justify-center items-center mr-4">
          <motion.input
            type="text"
            data-testid="searchInput"
            className="w-80 h-10 border-gray-300 bg-zinc-600 drop-shadow-2xl text-white m-2 rounded-3xl p-5 outline-none focus-within:border-gray-400"
            placeholder="Search for Chicken Biryani"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.button
            className="bg-gradient-to-tr from-green-700 to-green-400 h-10 text-white p-5 w-28 rounded-3xl flex justify-center items-center hover:drop-shadow-xl transition-all ease-linear delay-75"
            onClick={() => {
              const filteredList = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText?.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
            <span className="ml-2">Search</span>
          </motion.button>
        </div>
        <img
          src={diarrow}
          alt="diarrow"
          className="h-36 absolute top-8 right-[278px]"
        />
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <img
            src={verified}
            className="w-7 h-7 absolute z-20 bottom-5 left-[177px]"
          />
          <motion.button
            className="relative bg-gradient-to-r from-stone-900 to-neutral-700 text-white px-6 py-2 text-center rounded-3xl overflow-hidden"
            onClick={() => {
              const filterdata = listofRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurant(filterdata);
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-50 blur-md transform skew-x-12 animate-glossy z-0"></span>
            <span className="relative z-10">Top Rated Restaurants</span>
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-20 mx-10">
        <motion.div
          className="flex justify-center items-center mt-16 gap-2"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <img src={sticks} className="w-9 h-9" />
          <h1 className="font-bold text-2xl font-sans bg-green-400 px-2 boxes">
            Restaurants with online food delivery in{" "}
            <span className="italic tracking-tight">'Mathura'</span>
          </h1>
        </motion.div>

        <div className="flex flex-wrap gap-20 justify-center rounded-3xl pt-14 pb-20 bg-zinc-950 px-10">
          {FilteredRestaurant?.map((restaurant, index) => (
            <motion.div
              key={restaurant?.info?.id}
              initial="hidden"
              animate="visible"
              custom={index}
              variants={cardVariants}
            >
              <Link
                className="Text"
                to={"/restaurants/" + restaurant?.info?.id}
              >
                {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                  <EnhancedComponent resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
