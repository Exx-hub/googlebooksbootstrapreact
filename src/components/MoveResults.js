import React from "react";
import Pagination from "react-bootstrap/Pagination";

function MoveResults({ index, setIndex, items }) {
  return (
    <Pagination size="sm" className="d-flex justify-content-center">
      <Pagination.Prev
        onClick={() => setIndex((prev) => prev - 1)}
        disabled={index === 0}
        className="m-2"
      />
      <Pagination.Next
        onClick={() => setIndex((prev) => prev + 1)}
        className="m-2"
      />
    </Pagination>
  );
}

export default MoveResults;
