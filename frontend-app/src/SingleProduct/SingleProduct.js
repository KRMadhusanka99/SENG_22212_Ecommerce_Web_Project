import { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import { Link, useParams } from "react-router-dom";
import './SingleProduct.css';
import '../Home/Home.css';
function SingleProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8090/product/getProduct?id=${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.name,
        image: product.image,
        price: product.price,
      },
    });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, description, price, image } = product;

  return (
    <div className="singleproduct">
      <div className="image">
        <div className="Bigimage">
          <img src={image} alt="pic" />
        </div>
        <div className="smallimage">
          <img src={image} alt="pic" />
          <img src={image} alt="pic" />
          <img src={image} alt="pic" />
        </div>
      </div>
      <div className="product-info">
        <p className="title1">{name}</p>
        <p className="description">{description}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button2 onClick={addToBasket}>Add to Basket</button2>
        <button1>
          <Link to="/checkout">Buy now</Link>
        </button1>
      </div>
    </div>
  );
}

export default SingleProduct;

