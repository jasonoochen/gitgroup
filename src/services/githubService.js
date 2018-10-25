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
