import React from "react";

const Count = ({ count }) => {
  return (
    <div className="count">
      <h4>
        {count === 0
          ? "Empty"
          : `Showing ${count} Note${count === 1 ? "" : "s"} in Database`}
      </h4>
    </div>
  );
};

export default Count;
