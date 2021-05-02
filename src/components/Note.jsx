import React from "react";
import { MdDelete } from "react-icons/md";

const Note = ({ id, title, content, onDelete }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} color="red" />
      </button>
    </div>
  );
};

export default Note;
