export interface IRepositoryOwner {
  avatar_url: string,
  name: string,
  blog: string,
  location: string,
  email: string,
  public_repos: number
}

export interface IRepository {
  name: string,
  url: string,
  owner: string,
  description: string,
  updated_at: Date,
  forks: number,
  watchers: number
}

export interface IRepositoryDetailInfo extends IRepository {
  html_url: string,
  open_issues_count: number,
  subscribers_count: number
}
