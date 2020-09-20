import React from "react";
import { Container } from "react-bootstrap";
import Book from "./Book";

function BookList({ books }) {
  return (
    <Container className="d-flex flex-wrap justify-content-around">
      {books && books.map((item) => <Book item={item} key={item.id} />)}
    </Container>
  );
}

export default BookList;
