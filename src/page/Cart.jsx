import { contextData } from "../context/ContextCart";
import SingleCart from "./SingleCart";
const Cart = () => {
  const { state, total } = contextData();
  return (
    <>
      {state.cart.length < 1 && <p className="text-2xl">No items in cart</p>}
      <div className="container mx-auto flex gap-8 mt-4">
        <div className="cart-items w-[70%] space-y-4 flex flex-col">
          {state.cart.map((singleCart) => {
            return <SingleCart key={singleCart.id} data={singleCart} />;
          })}
        </div>

        {/* Payment part */}
        <div className="cart-sidebar bg-black text-white w-[30%] h-[80vh] space-y-4">
          <h2 className="px-4 text-2xl mt-4">
            Subtotal ({state.cart.length}) Items
          </h2>
          <p className="px-4 text-lg font-bold">Total {`Rs. ${total}`}</p>
          <button
            type="button"
            className="text-xl bg-blue-700 w-[95%] mx-auto py-1 
          rounded-sm block hover:bg-blue-500 hover:transition-all hover:delay-75"
          >
            Proceed to payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
