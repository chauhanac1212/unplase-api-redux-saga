import React from "react";

const Images = (props) => {
  return (
    <div className="col-md-4 col-lg-3 col-sm-6">
      <img
        className="img-fluid"
        src={props.img}
        alt="image"
        style={{
          width: "300px",
          height: "280px",
          objectFit: "cover",
          // marginBottom: "15px",
        }}
      />
    </div>
  );
};

export default Images;
