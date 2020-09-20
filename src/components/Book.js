import React from "react";
import { Card } from "react-bootstrap";

function Book({ item }) {
  console.log(item);
  return (
    <Card
      className="text-center mb-4 shadow-lg"
      style={{ width: "18rem", padding: "10px" }}
    >
      <Card.Img
        src={
          item.volumeInfo.imageLinks.thumbnail ||
          item.volumeInfo.imageLinks.smallThumbnail
        }
        alt=""
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />

      <Card.Body>
        <p style={{ fontWeight: "bold" }}>{item.volumeInfo.title}</p>
        {item.saleInfo.saleability === "FOR_SALE" ? (
          <p>
            Price: {item.saleInfo.listPrice.currencyCode}
            {item.saleInfo.listPrice.amount}
          </p>
        ) : (
          <p>not for sale</p>
        )}
      </Card.Body>
    </Card>
  );
}

export default Book;
