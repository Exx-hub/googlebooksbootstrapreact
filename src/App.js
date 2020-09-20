import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Search from "./components/Search";
import BookList from "./components/BookList";
import MoveResults from "./components/MoveResults";

function App() {
  const [query, setQuery] = useState("dogs");
  const [books, setBooks] = useState({});
  const [order, setOrder] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "GET",
        url: "https://www.googleapis.com/books/v1/volumes",
        params: {
          q: query,
          key: "AIzaSyCrKZ_Ig7l8WbYrJ3qFa4oz3W_pbwqSEdo",
          orderBy: order || null,
          maxResults: 10,
          startIndex: index,
        },
      });
      // console.log(result.data);
      setBooks(result.data);
    };
    if (query) {
      fetchData();
    }
  }, [query, order, index]);

  return (
    <div style={{ backgroundColor: "#e8e6e3" }}>
      <Header />
      <Search setQuery={setQuery} setOrder={setOrder} />
      <BookList books={books.items} />
      <MoveResults setIndex={setIndex} index={index} items={books.totalItems} />
    </div>
  );
}

export default App;
