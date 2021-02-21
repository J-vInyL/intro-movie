import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 200px;
  margin-bottom: 40px;
  position: relative;
`;

const Title = styled.span`
  background-color: white;
  width: auto;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  margin: auto;
`;

function Shoes({ _id, name, price }) {
  return (
    <Link
      to={{
        pathname: `/about/${_id}`,
        state: {
          name,
          price
        }
      }}
    >
      <Card>
        <Title>
          {name} / {price}
        </Title>
      </Card>
    </Link>
  );
}

Shoes.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Shoes;
