"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => console.log("Click the server button")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
