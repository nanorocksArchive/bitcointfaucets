import * as React from "react";

const Description = (props) => {
  return (
    <div>
      <p className="text-lg font-semibold pb-2">{props.data.title}</p>
      <p className="text-lg font-light text-gray-800 text-justify">{props.data.text}</p>
      <br />
    </div>
  );
};

export default Description;
