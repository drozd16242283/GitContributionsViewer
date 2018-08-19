import { Injectable } from '@angular/core';
import { BaseHttpService } from '@connection/services/base-http.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContributorsHttpService extends BaseHttpService {

  fetchContributorsByRepository(owner: string, repository: string): Observable<any> {
    return this.get(this.concatUrl(`repos/${owner}/${repository}/contributors`));
  }

  fetchContributorInfo(userName: string): Observable<any> {
    return this.get(`${this._config.httpConfig.contributions}${userName}`);
  }
}
