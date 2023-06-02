import { contextData } from "../context/ContextCart";
import {AiOutlineStar,AiFillStar } from "react-icons/ai";
export const SingleProduct = (props) => {
  const { state, dispatch } = contextData();
  const { id, image, name, inStock, fastDelivery, price, ratings } = props.data;

  return (
    <div className="single-product shadow-lg rounded-md">
      <div className="image-container overflow-hidden">
        <img
          src={image}
          className="w-full object-cover rounded-md h-60
            hover:scale-150 hover:transition-all hover:delay-75"
        ></img>
      </div>

      <div className="px-4 my-3">
        <h2 className="font-bold text-lg">{name}</h2>
        <h3 className="font-bold my-2">{`Rs. ${price}`}</h3>
        <div className="flex">
        {
          [...Array(ratings)].map((ele,indx)=>{
            return <AiFillStar key={indx}/>;
          })
        }
        {
          [...Array(5-ratings)].map((ele,indx)=>{
            return <AiOutlineStar key={indx}/>
          })
        }
      </div>
        {fastDelivery ? <p>fast delivery</p> : <p>4 days delivery</p>}

        {state.cart.some((pro) => id === pro.id) ? (
          <button
            type="button"
            className="bg-red-500 px-2 py-1 text-white rounded-sm my-2
         hover:bg-red-800 hover:transition-all hover:delay-100 disabled:bg-blue-300"
            disabled={inStock < 1}
            onClick={() => dispatch({ type: "REMOVE_CART", payload: { id } })}
          >
            Remove to cart
          </button>
        ) : (
          <button
            type="button"
            className="bg-blue-500 px-2 py-1 text-white rounded-sm my-2
         hover:bg-blue-800 hover:transition-all hover:delay-100 disabled:bg-blue-300"
            disabled={inStock < 1}
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: props.data })
            }
          >
            {inStock < 1 ? (
              <p className="text-white">Out of stock</p>
            ) : (
              <p>Add to cart</p>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
