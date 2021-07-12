export type arrayOfRepositoriesType = repoInterface[]

export interface repoNodeInterface {
  id: string,
  name: string,
  updatedAt: string,
  stargazerCount: number,
  createdAt: string,
  diskUsage: number,
  owner: repoOwnerInterface
}

export interface repoInterface {
  node: repoNodeInterface
}

export interface repoOwnerInterface {
  login: string
}
