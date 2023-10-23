import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/products")
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
      <h2>Products Page</h2>
      <Link type="button" to="add" className="btn btn-primary m-3">
        Add Product
      </Link>
      <table className="table mt-2">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.title.slice(0,20)}</td>
                <td>{product.price}</td>
                <td>
                  <Link
                    type="button"
                    to={`/products/${product.id}`}
                    className="btn btn-primary m-3"
                  >
                    View
                  </Link>
                  <Link
                    type="button"
                    to={`/products/${product.id}`}
                    className="btn btn-success m-3"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger m-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          }
          )}
        </tbody>
      </table>
    </>
  );
}

export default Products;
