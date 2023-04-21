import React from "react";
import './Filter.css'

const Filter = ({ color, material, materialFilter, colorFilter }) => {
  return (
    <div className="filter-div">
      <h5>
        <b>Filter</b>
      </h5>
      <div className="material-filter">
        <h6 className="mb-3 mt-5">Materials</h6>
        <p className="mb-2">
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
      <div className="mt-5 color-filter">
        <h6>Color</h6>
        <p className="mb-2">
          <b>All</b>
        </p>
        {color.map((color, index) => {
          return (
            <div onClick={() => {colorFilter(color.id)}} key={index}>
              <p>{color.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
