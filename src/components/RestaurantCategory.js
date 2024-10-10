import downarrow from "../assets/downarrow.svg";
import ItemList from "./ItemList";
import { motion } from "framer-motion";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  const arrowVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  const listVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div
        className="drop-shadow-2xl bg-zinc-950 font-bold text-white rounded-xl text-base flex w-6/12 justify-between items-center p-5 m-auto my-5 cursor-pointer"
        onClick={handleClick}
      >
        <p>
          {data.title} ({data.itemCards.length})
        </p>
        <motion.img
          className="w-6 h-6"
          src={downarrow}
          alt="downarrow"
          variants={arrowVariants}
          animate={showItems ? "open" : "closed"}
        />
      </div>
      <motion.div
        className="overflow-hidden relative z-10"
        variants={listVariants}
        initial="hidden"
        animate={showItems ? "visible" : "hidden"}
      >
        {showItems && (
          <ItemList
            key={data?.itemCards?.card?.info?.id}
            items={data.itemCards}
          />
        )}
      </motion.div>
    </>
  );
};

export default RestaurantCategory;
