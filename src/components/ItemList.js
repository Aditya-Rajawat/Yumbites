import { useDispatch, useSelector } from "react-redux";
import { MENU_IMG } from "../utils/constants";
import Veglogo from "../assets/veglogo.png";
import { addItem, addRemove } from "../utils/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const ItemList = ({ items }) => {
  const showToastMessage = () => {
    toast.success("Item added to cart!", {
      position: "bottom-center",
    });
  };

  const dispatch = useDispatch();
  const isAdd = useSelector((store) => store.cart.isAdd);

  const handleAddItem = (item) => {
    dispatch(addRemove(true));
    showToastMessage();
    dispatch(addItem(item));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const scaleOnHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible">
        {items.map((item) => (
          <motion.div
            key={item?.card?.info?.id}
            className="w-6/12 m-auto text-left flex justify-between items-center"
            variants={fadeInUp}
            initial={isAdd ? "hidden" : "visible"}
            animate={isAdd ? "visible" : "hidden"}
          >
            <div className="w-9/12 mr-10 ml-1 text-white pt-3">
              <img className="w-3 mb-1 bg-white" src={Veglogo} alt="" />
              <p className="font-semibold text-base">{item.card.info.name}</p>
              <p className="text-white text-sm">{item.card.info.category}</p>
              <p className="text-[15px] mb-3 rounded-full bg-gradient-to-tr from-zinc-400 to-zinc-300 w-fit px-2 py-1 text-black mt-4 font-medium">
                ₹{" "}
                {item?.card?.info?.defaultPrice
                  ? item?.card?.info?.defaultPrice / 100
                  : item?.card?.info?.price / 100}
              </p>
            </div>

            <motion.div
              className="w-3/12 ml-20 mt-12"
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-36 h-24 object-fill rounded-md shadow-2xl"
                src={MENU_IMG + item.card.info.imageId}
                alt="image"
              />
              <motion.button
                className="bg-green-500 shadow-2xl w-24 h-8 rounded-3xl relative bottom-5 left-6 m-auto text-white font-semibold text-sm hover:bg-green-400"
                onClick={() => handleAddItem(item)}
                whileHover={scaleOnHover.hover}
                initial={scaleOnHover.rest}
                animate={scaleOnHover.rest}
              >
                ADD
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <div className="bottom-0 left-0 absolute z-100">
        <ToastContainer />
      </div>
    </>
  );
};

export default ItemList;
