import { AiTwotoneDelete,AiOutlineStar,AiFillStar } from "react-icons/ai";
import { contextData } from "../context/ContextCart";


const SingleCart = (props) => {
  const { id, name, image, price, ratings, qty } = props.data;
  const { state, dispatch } = contextData();
  console.log(props.data);
  const handleQty = (e)=>{
    const val = e.target.value;
    dispatch({type:"CHANGE_QTY",payload:{val}})
  }

  return (
    <div className="single-cart-items flex justify-evenly items-center">
      <div className="image-itmes flex items-center space-x-3">
        <img
          src={image}
          className="h-[90px] w-[150px] object-fit rounded-md"
          draggable={false}
        />
        <p>{name}</p>
      </div>

      <div>{`Rs. ${price}`}</div>

      <div className="flex">
        {
          [...Array(ratings)].map((ele)=>{
            return <AiFillStar key={ele}/>;
          })
        }
        {
          [...Array(5-ratings)].map((ele)=>{
            return <AiOutlineStar key={ele}/>
          })
        }
      </div>

      <div>
        <button
          type="button"
          className="border text-xl px-4"
          onClick={() => dispatch({ type: "DECREMENT_QTY", payload: { id } })}
        >
          -
        </button>
        <input
          onChange={handleQty}
          type="number"
          className="border w-16 text-center focus:outline-none text-lg mx-3"
          value={qty}
        />
        <button
          type="button"
          className="border text-xl px-4"
          onClick={() => dispatch({ type: "INCREMENT_QTY", payload: { id } })}
        >
          +
        </button>
      </div>

      <div
        onClick={() => dispatch({ type: "REMOVE_CART", payload: { id } })}
        className="cursor-pointer border p-2"
      >
        <AiTwotoneDelete />
      </div>
    </div>
  );
};

export default SingleCart;
