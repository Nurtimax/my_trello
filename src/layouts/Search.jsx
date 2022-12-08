import React from "react";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSelector } from "react-redux";
import { SearchStyled } from "../assets/Global";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");

  const { users } = useSelector((state) => state.login);

  const changeSearchItemHandler = (e) => {
    setSearchItem(e.target.value);
  };

  const newUser = users.filter((item) => {
    if (searchItem === "") {
      return item;
    }
    return item.name.toLowerCase().includes(searchItem);
  });

  return (
    <SearchStyled>
      <div className="search_item">
        <form>
          <label htmlFor="search">
            <input
              type="text"
              value={searchItem}
              onChange={changeSearchItemHandler}
            />
            <BiSearchAlt2 />
          </label>
        </form>
      </div>
      <div className="user_list">
        {newUser?.map((item) => (
          <li key={item.id} className="user_list_item">
            <header className="item_header">{item.name}</header>
            <article className="item_article">
                <div>Email: {item.email}</div>
                {/* <div>Password: {item.password}</div> */}
            </article>
          </li>
        ))}
      </div>
    </SearchStyled>
  );
};

export default Search;
