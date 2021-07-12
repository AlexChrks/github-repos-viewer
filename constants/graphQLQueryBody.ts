export const graphQLQueryBody: string = `
query {
  user(login: "AlexChrks") {
    id
    name
    login
    avatarUrl
    repositories(first: 50) {
      edges {
        node {
          id
          name
          updatedAt
          stargazerCount
          createdAt
          diskUsage
          owner {
            login
          }
        }
      }
    }
  }
}
`
