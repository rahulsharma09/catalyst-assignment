import React from "react";

const Filter = ({ color, material, materialFilter }) => {
  return (
    <div className="">
      <h5>
        <b>Filter</b>
      </h5>
      <div className="material-filter">
        <h6>Materials</h6>
        <p className="mb-3">
          <b>All</b>
        </p>
        {material.map((material, index) => {
          return (
            <div onClick={() => {materialFilter(material.id)}} key={index}>
              <p>{material.name}</p>
            </div>
          );
        })}
      </div>
      <div className="color-filter">
        <h6>Colors</h6>
        <p className="mb-3">
          <b>All</b>
        </p>
        {color.map((color, index) => {
          return (
            <div key={index}>
              <p>{color.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
