import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function Myproduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    //api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProduct(result));
  }, []);

  const cards = product.map((prod) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={prod.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={prod.image}
            style={{ width: "100px", height: "130px", paddingTop: "20px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>INR:{prod.price}</Card.Text>
        </Card.Body>

        <Card.Footer style={{ backgroundColor: "white" }}>
          <div className="text-center">
            <Button variant="primary">Add To Cart</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h2 style={{ textAlign: "center" }}> products</h2>

      <div className="row">{cards}</div>
    </div>
  );
}
