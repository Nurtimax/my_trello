import React from "react";

const Card = (props) => {
  return <div {...props}>{props.children}</div>;
};

export default Card;
