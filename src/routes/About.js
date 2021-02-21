import React from "react";
import { useQuery } from "@apollo/client";
import { ABOUT_PAGE } from "../graphql/gql";
import Shoes from "../component/Shoes";
import styled from "styled-components";
import "./About.css";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const About = () => {
  const { loading, error, data } = useQuery(ABOUT_PAGE);
  return (
    <div>
      <Container>
        {loading && "Loading123..."}
        {error && "Something is wrong"}
        {!loading &&
          data &&
          data.allShoes &&
          data.allShoes.map(shoes => (
            <Shoes
              _id={shoes._id}
              key={shoes._id}
              name={shoes.name}
              price={shoes.price}
            />
          ))}
        <Container />
      </Container>
    </div>
  );
};

export default About;
