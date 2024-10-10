import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useState } from "react";
import close from "../assets/clear.svg";
import remove from "../assets/remove.svg";
import { motion } from "framer-motion";
import addtoCart from "../assets/orangecart.png";
import doodle from "../assets/atcdoodle.svg";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [showbutton, setShowButton] = useState(true);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    setShowButton(false);
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="mx-4 p-4 font-bold text-xl text-center">
      {cartItems.length === 0 && (
        <motion.div className="relative flex justify-center mt-44 ml-28 animate-bounce">
          <motion.img
            src={doodle}
            className="h-48 absolute -top-10 right-72 z-10"
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
          />
          <motion.img
            src={addtoCart}
            className="z-20"
            alt="Add to cart"
            variants={imageAnimation}
            initial="hidden"
            animate="visible"
          />
        </motion.div>
      )}

      <ItemList items={cartItems} />

      {cartItems.length !== 0 && (
        <div className="flex gap-5 rounded-3xl p-3 w-1/2 bg-zinc-800 my-6 left-[392px] fixed bottom-2">
          {showbutton && (
            <div
              onClick={handleClearCart}
              className="flex gap-2 w-1/2 items-center bg-gradient-to-tr from-red-500 to-orange-500 text-white rounded-xl text-base hover:drop-shadow-2xl sticky bottom-10 font-medium z-100 px-3 py-2"
            >
              <img src={close} className="w-4 h-4" />
              <button>Clear Cart</button>
            </div>
          )}
          {showbutton && (
            <motion.div
              initial="show"
              animate="hidden"
              onClick={handleRemoveItem}
              className="flex gap-2 w-1/2 items-center bg-gradient-to-tr from-lime-600 to-green-600 text-white rounded-xl text-base hover:drop-shadow-2xl sticky bottom-10 font-medium z-100 px-3 py-2"
            >
              <img src={remove} className="w-4 h-4" />
              <button>Remove Item</button>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
