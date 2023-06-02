import { createContext, useContext, useReducer } from "react";
const CartContextProvider = createContext(null);
import faker from "faker";
import cartReducer, {productReducer} from "./Reducer";

export const ContextCart = ({ children }) => {
  let total = 0;
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const initialState = {
    product: products,
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  for(let items of state.cart){
    total+=items.price * items.qty;
  }

  
  const[productState, productDispatch]=useReducer(productReducer,{
    byStock:false,
    byFastDelivery:false,
    byRating:0,
    searchQuery:"",
  });
  
  const contextValue = {
    state,
    dispatch,
    total,
    productState,
    productDispatch
  };
  return (
    <CartContextProvider.Provider value={contextValue}>
      {children}
    </CartContextProvider.Provider>
  );
};

export const contextData = () => {
  return useContext(CartContextProvider);
};
export default CartContextProvider;
