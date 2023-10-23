import { useEffect, useState } from "react";

function Add() {
  return (
    <>
      <h2>Add New Product</h2>
      <div className="form mt-5">
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
          />
        </div>
      </div>
    </>
  );
}

export default Add;
