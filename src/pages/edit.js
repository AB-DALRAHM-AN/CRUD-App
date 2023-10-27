import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Edit() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Smart Phones");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  let { productID } = useParams();
  const formSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9000/products/${productID}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        category: category,
        description: description,
        price: price,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setTitle("");
        setCategory("Smart Phones");
        setDescription("");
        setPrice(0);
        Swal.fire("Added Succesfuly!");
      });
  };
  return (
    <>
      <h2>Edit Product</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Category" className="form-label">
            Category
          </label>
          <select
            name="cars"
            id="cars"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="Smart Phones">Smart Phones</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={formSubmit}>
          Add Product
        </button>
      </form>
    </>
  );
}

export default Edit;
