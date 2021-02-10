import React from "react";
import { useQuery } from "react-apollo";
import { ABOUT_PAGE } from "../graphql/gql";
import "./About.css";

function About(props) {
  //console.log(props);
  const { loading, error, data } = useQuery(ABOUT_PAGE);

  if (loading) return console.log("loading123", loading);
  if (error) console.log("errorr123", error);
  console.log("data111", data.allShoes);

  return (
    <div className="about__container">
      <h1> hello</h1>
    </div>
  );
}

export default About;
