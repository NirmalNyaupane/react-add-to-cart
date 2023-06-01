import {contextData} from '../context/ContextCart';
import SingleProduct from '../components/SingleProduct';
const Home = () => {
  const{state:{product}}=contextData();
  
  
  return (
    <div className="container mx-auto my-12">
      <section className="left">

      </section>

      <section className="right flex flex-wrap gap-8">
        {
          product.map((singleItems)=>{
            return <SingleProduct key={singleItems.id} data={singleItems} />
          })
        }
      </section>
    </div>
  )
}
export default Home;