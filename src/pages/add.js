import { useState } from "react";
import Swal from "sweetalert2";

function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const formSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/products", {
      method: "POST",
      body: JSON.stringify({
        title: title,
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
        setDescription("");
        setPrice(0);
        Swal.fire("Added Succesfuly!");
      });
  };
  return (
    <>
      <h2>Add New Product</h2>
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

export default Add;
