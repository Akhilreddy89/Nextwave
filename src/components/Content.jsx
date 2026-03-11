import { useState, useEffect } from "react";
import "./Content.css";
const API_URL=import.meta.env.VITE_API_URL;
import axios from "axios";
function Content() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const fetchProducts = async () => {
    const url = `${API_URL}/store`;    //need to think about what is axios and cors(backend)
    const res = await axios.get(url);
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="productspage">
      <h3>Products Page</h3>
      {/* <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
      <hr /> */}
      <div className="boxheader">
        {products.map((product) => (
            <div className="box2">
            <img src={`${API_URL}/${product.imageUrl}`} alt="image1" srcset="" className="imagecss" />
             <h3>{product.name}</h3>
             <p>{product.desc}</p>
             <h4>{product.price}</h4>
             <p><button>Add to Cart</button></p>
            </div>
        ))}
      </div>
    </div>
  );
}
export default Content;