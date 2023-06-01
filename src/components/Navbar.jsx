import {
  AiOutlineShoppingCart,
  AiFillCaretDown,
  AiTwotoneDelete,
} from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { contextData } from "../context/ContextCart";

export const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const { state, dispatch } = contextData();

  return (
    <header className="bg-black text-white shadow-lg">
      <nav className="flex justify-around p-4">
        <div className="first-part flex gap-8 items-center">
          <div className="font-bold text-white text-xl cursor-pointer">
            <Link to="/">NIRMAL SHOP</Link>
            <Link to="/cart">Cart</Link>
          </div>
          <div className="navbar-items"></div>
        </div>

        <div className="search-box">
          <input
            name="search"
            id="searchbox"
            type="text"
            placeholder="Search products"
            className="text-black block focus:outline-none px-4 py-1 
          rounded-sm shadow-sm w-60"
          />
        </div>

        <div className="cart-items bg-green-700 relative rounded-sm">
          <div
            className="flex items-center justify-around gap-2 cursor-pointer rounded-md"
            onClick={() => setActive(!isActive)}
          >
            <AiOutlineShoppingCart className="text-3xl py-1" />
            <span>{state.cart.length}</span>
            <AiFillCaretDown className="py-1" />
          </div>
          {isActive && (
            <div
              className="drop-down absolute bg-white text-black w-[20rem]
             p-3 shadow-md rounded-sm -translate-x-[50%] top-11"
            >
              <ul>
                {state.cart.map((element) => {
                  const { id, image } = element;
                  return (
                    <li
                      key={element.id}
                      className="cursor-pointer my-2 flex justify-between items-center"
                    >
                      <div className="flex gap-2 items-center">
                        <img
                          src={image}
                          alt="cart-items"
                          className="w-[40px] h-[40px]
                          rounded-[50%] object-cover"
                        ></img>

                        {element.name}
                      </div>
                      <div
                        onClick={() =>
                          dispatch({ type: "REMOVE_CART", payload: { id } })
                        }
                      >
                        <AiTwotoneDelete />
                      </div>
                    </li>
                  );
                })}

                <li
                  className="cursor my-3 bg-blue-600 p-2 cursor-pointer
                 hover:bg-blue-500 hover:transition-all hover:delay-100"
                >
                <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
