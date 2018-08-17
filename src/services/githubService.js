import http from "./httpService";

const httpGitHubGraphQL = http.create({
  baseURL: "http://api.github.com/graphql",
  headers: {
    Authorization: "bearer 132ffddbaf3dbb7a4311b74ee988be2648410a1a"
  }
});
