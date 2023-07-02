import React from "react";
import "./Display.css";


const Display = ({ display, textFormat, product }) => {
  console.log(textFormat);

  return (
    <>
      <div className="card card-content">
        <div className="col-md-8, col-sm-12 py-5">

          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            width="400px"
            height="400px"
          />
        </div>

        <div className="memeText text-center  bg container ">
          <div className="upperText">
            <p style={{ fontSize: textFormat }}> {display.upperText}</p>
          </div>
          <img
            src={`${display.url}` || "http://via.placeholder.com/400x300"}
            alt="meme-text"
          />
          <div className="lowerText">
            <p style={{ fontSize: textFormat }}> {display.lowerText}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Display;
