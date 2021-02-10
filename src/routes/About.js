import React from "react";
import { Query } from "react-apollo";
import { ABOUT_PAGE } from "../graphql/gql";
import "./About.css";

function About() {
  return (
    <div className="about__container">
      <Query query={ABOUT_PAGE}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading123...</p>;
          if (error) return <p>Error!123</p>;
          return (
            <ul>
              {data.allShoes.map(({ _id, name, price }) => (
                <li key={_id}>{name}</li>
              ))}
            </ul>
          );
        }}
      </Query>
    </div>
  );
}

export default About;
