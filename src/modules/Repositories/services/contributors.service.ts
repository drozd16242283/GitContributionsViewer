import { Injectable } from '@angular/core';
import { ContributorsHttpService } from '@connection/services/contributors-http.service';
import { IContributor } from '@repositories/models/contributors';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ContributorsService {

  constructor(protected _contributorHttpService: ContributorsHttpService) { }

  getContributorsList(owner: string, repository: string, page: number): Observable<IContributor> {
    return this._contributorHttpService.fetchContributorsByRepository(owner, repository, page)
      .pipe(map((contributors: any) => {
        return contributors.map(contributor => {
          return {
            login: contributor.login,
            avatar_url: contributor.avatar_url,
            html_url: contributor.html_url,
            contributions: contributor.contributions
          };
        });
      }))
  }

  getContributorDetailInfo(userName: string): Observable<{ contributions, years }> {
    return this._contributorHttpService.fetchContributorInfo(userName);
  }
}
