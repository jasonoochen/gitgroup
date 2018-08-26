import axios from "axios";

export function createAxiosGitHub(accessToken) {
  const axiosGitHubGraphQL = axios.create({
    baseURL: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${accessToken}`
    }
  });

  return axiosGitHubGraphQL;
}

export async function getViewer(accessToken) {
  const GET_ORGANIZATION = `
  {
    viewer {
      name
    }
  }
`;
  const result = await createAxiosGitHub(accessToken).post("", {
    query: GET_ORGANIZATION
  });
  return result;
}
