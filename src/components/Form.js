import React from "react";
import Input from "./Input";
import Filter from "./Filter";

export default function Form() {
  return (
    <div className="search-top">
      <p>TODO LIST</p>
      <div className="add-text">
        <Input />
        <Filter />
      </div>
    </div>
  );
}
