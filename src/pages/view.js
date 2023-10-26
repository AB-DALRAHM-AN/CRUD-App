import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function View() {
  const [product, setProducts] = useState([]);
  let { productID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <span>Price: {product.price}</span>
        </div>
      </div>
    </>
  );
}

export default View;
