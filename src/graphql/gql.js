import gql from "graphql-tag";

export const ABOUT_PAGE = gql`
  query {
    allShoes {
      name
      price
    }
  }
`;
