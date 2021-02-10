import gql from "graphql-tag";

export const ABOUT_PAGE = gql`
  query allShoes {
    allShoes {
      name
      price
    }
  }
`;
