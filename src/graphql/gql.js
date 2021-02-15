import gql from "graphql-tag";

export const ABOUT_PAGE = gql`
  query {
    allShoes {
      _id
      name
      price
    }
  }
`;
