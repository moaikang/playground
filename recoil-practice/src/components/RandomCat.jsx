import React from "react";
import useCats from "../hooks/useCats";

export default function RandomCat() {
  const { randomCatURLLoadable } = useCats();
  let content = null;

  switch (randomCatURLLoadable.state) {
    case "loading":
      content = <div>Loading...</div>;
      break;
    case "hasValue":
      content = <img src={randomCatURLLoadable.contents} alt="random cat" />;
      break;
    case "hasError":
      content = <div>Error!</div>;
      break;
    default:
      content = null;
  }
  return <div>{content}</div>;
}
