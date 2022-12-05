import React from "react";
import { useParams } from "react-router-dom";
import { DefinedPagesStyled } from "../assets/Global";

const DefinedPages = () => {
  const { id } = useParams();
  return (
    <DefinedPagesStyled>
      <div className="not_defined">
        <h1>404</h1>
        <h3>
          This page is not defined <span>{id}</span>
        </h3>
      </div>
    </DefinedPagesStyled>
  );
};

export default DefinedPages;
