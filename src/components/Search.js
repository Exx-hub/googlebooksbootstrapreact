import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Search({ setQuery, setOrder }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setQuery(input);
    }
    setInput("");
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center mt-3"
    >
      <div>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="search some books"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Form.Group>
      </div>
      <div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
      <div>
        <DropdownButton title="">
          <Dropdown.Item onSelect={() => setOrder("newest")}>
            Newest First
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => setOrder("relevance")}>
            Order by relevance
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </Form>
  );
}

export default Search;
