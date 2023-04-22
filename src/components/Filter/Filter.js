import React from "react";
import "./Filter.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filter = ({ color, material, materialFilter, colorFilter }) => {
  return (
    <>
      <div className="mobile-filter">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className="material-filter">
                <h6 className="">Materials</h6>
                <p className="mb-2">
                  <b>All</b>
                </p>
                {material.map((material, index) => {
                  return (
                    <div
                      onClick={() => {
                        materialFilter(material.id);
                      }}
                      key={index}
                    >
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
                    <div
                      onClick={() => {
                        colorFilter(color.id);
                      }}
                      key={index}
                    >
                      <p>{color.name}</p>
                    </div>
                  );
                })}
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

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
              <div
                onClick={() => {
                  materialFilter(material.id);
                }}
                key={index}
              >
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
              <div
                onClick={() => {
                  colorFilter(color.id);
                }}
                key={index}
              >
                <p>{color.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Filter;
