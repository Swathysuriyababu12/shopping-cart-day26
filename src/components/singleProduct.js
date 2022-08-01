import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src="https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg"
          alt={prod.name}
        />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> ₹{prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
