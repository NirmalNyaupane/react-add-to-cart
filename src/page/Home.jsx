import { contextData } from "../context/ContextCart";
import SingleProduct from "../components/SingleProduct";
import Filter from "../components/Filter";
const Home = () => {
  const {
    state: { product },
    productState: { byStock, byFastDelivery, sort, searchQuery}
  } = contextData();

  const transformProduct = () => {
    let sortedProduct = product;
    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) => {
        return sort === "lowtohigh"
          ? Number(a.price) - Number(b.price)
          : Number(b.price) - Number(a.price);
      });
    }

    if (!byStock) {
      sortedProduct = sortedProduct.filter((e) => {
        return e.inStock;
      });
    }

    if (byFastDelivery) {
      sortedProduct = sortedProduct.filter((e) => {
        return e.fastDelivery;
      });
    }

    if(searchQuery!=""){
      sortedProduct=sortedProduct.filter((e)=>{
        return e.name.toLowerCase().includes(searchQuery);
      })
    }
    return sortedProduct;
  };

  return (
    <div className="my-12 flex gap-8">
      <section className="left">
        <Filter />
      </section>

      <section className="right grid grid-cols-3 gap-8">
        {transformProduct().length<1&&<p className="text-center">No any single items match</p>}
        {transformProduct().map((singleItems) => {
          return <SingleProduct key={singleItems.id} data={singleItems} />;
        })}
      </section>
    </div>
  );
};
export default Home;
