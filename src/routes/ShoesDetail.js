import React, { useState, useEffect } from "react";

function ShoesDetail({ location, history }) {
  console.log(location);

  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  });

  return <h1>{location.state.name}</h1>;
}

export default ShoesDetail;
