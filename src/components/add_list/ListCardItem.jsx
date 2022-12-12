import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTrelloCardList } from "../../store/reducers/signupReducer";

const ListCardItem = ({ children, id, editCard, editTitle }) => {
  const [editText, setEditText] = useState(children);
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(editTrelloCardList({ id, newTitle: editText }));
      editCard();
    }
  };

  return (
    <div>
      {editTitle ? (
        <label htmlFor="" className="label">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit_input"
            onKeyDown={handleKeyDown}
          />
        </label>
      ) : (
        <>
          <h2>{children}</h2>
        </>
      )}
    </div>
  );
};

export default ListCardItem;
