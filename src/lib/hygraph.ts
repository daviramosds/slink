import { gql } from "@apollo/client";
import { client } from "./apollo";

export const getLinks = async () => {
  const { data } = await client.query({
    query: gql`
      query Assets {
        links {
          id
          slug
          title
          url
        }
      }
    `,
  });

  return data.links
};
