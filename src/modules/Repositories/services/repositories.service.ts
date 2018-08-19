import { Injectable } from '@angular/core';
import { RepositoriesHttpService } from '@connection/services/repositories-http.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable()
export class RepositoriesService {

  constructor(private _repositoriesHttpService: RepositoriesHttpService) { }

  fetchUserAndRepositoriesList(userName: string): Observable<any> {
    return forkJoin(
      this._repositoriesHttpService.getRepositoryOwnerInfo(userName)
        .pipe(map((response: any) => {
          return {
            avatar_url: response.avatar_url,
            name: response.name,
            blog: response.blog,
            location: response.location,
            email: response.email,
            public_repos: response.public_repos
          };
        })),
      this._repositoriesHttpService.getRepositoriesList(userName)
        .pipe(map((response: any) => {
          return response.map(repository => {
            return {
              name: repository.name,
              url: repository.url,
              owner: repository.owner.login,
              description: repository.description,
              updated_at: repository.updated_at,
              forks: repository.forks,
              watchers: repository.watchers
            }
          });
        }))
    )
  }

  getRepositoryDetailInfo(ownerName: string, repositoryName: string): Observable<any> {
    return this._repositoriesHttpService.getRepositoryFullInfo(ownerName, repositoryName)
      .pipe(map((repository: any) => {
        return {
          name: repository.name,
          url: repository.url,
          html_url: repository.html_url,
          owner: repository.owner.login,
          description: repository.description,
          updated_at: repository.updated_at,
          forks: repository.forks,
          watchers: repository.watchers,
          open_issues_count: repository.open_issues_count,
          subscribers_count: repository.subscribers_count
        }
      }))
  }
}
