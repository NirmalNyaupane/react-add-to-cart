import { contextData } from "../context/ContextCart";
const Filter = () => {
  const {
    productState: { byStock, byFastDelivery, sort },
    productDispatch,
  } = contextData();

  return (
    <div className="bg-black text-white h-[80vh] w-[18rem]">
      <h2 className="text-white text-xl py-8 mx-4">Filter Products</h2>

      <form className="space-y-5 px-1 block m-auto w-[90%]">
        <div className="ascending-filter flex gap-2">
          <input
            type="radio"
            id="ascending"
            onChange={() => {
              productDispatch({
                type: "FILTER_BY_ASCENDING",
                payload: "lowtohigh",
              });
            }}
            checked={sort === "lowtohigh" ? true : false}
          />
          <label htmlFor="ascending" className="block">
            low to high
          </label>
        </div>

        <div className="descending-filtering flex gap-2">
          <input
            type="radio"
            id="descending"
            onChange={() => {
              productDispatch({
                type: "FILTER_BY_ASCENDING",
                payload: "hightolow",
              });
            }}
            checked={sort === "hightolow" ? true : false}
          />
          <label htmlFor="descending" className="block">
            high to low
          </label>
        </div>

        <div className="outofstock-filtering flex gap-2">
          <input
            type="checkbox"
            id="outofstock"
            onChange={() => {
              productDispatch({ type: "FILTER_BY_STOCK" });
            }}
            checked={byStock ? true : false}
          />
          <label htmlFor="outofstock" className="block">
            Include Out of Stock
          </label>
        </div>

        <div className="fastdelivery-filtering flex gap-2">
          <input
            type="checkbox"
            id="fastdelivery"
            onChange={() => {
              productDispatch({ type: "FILTER_BY_DELIVERY" });
            }}
            checked={byFastDelivery ? true : false}
          />
          <label htmlFor="fastdelivery" className="block">
            Fast Delivery Only
          </label>
        </div>

        <button
          type="button"
          className="bg-white block text-black w-full p-1 m-auto rounded-sm"
          onClick={() => {
            productDispatch({ type: "CLEAR_FILTER" });
          }}
        >
          Clear Filter
        </button>
      </form>
    </div>
  );
};

export default Filter;
