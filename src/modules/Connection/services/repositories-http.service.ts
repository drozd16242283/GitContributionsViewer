import { Injectable } from '@angular/core';
import { BaseHttpService } from '@connection/services/base-http.service';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RepositoriesHttpService extends BaseHttpService {
  getRepositoryOwnerInfo(userName: string): Observable<any> {
    return this.get(this.concatUrl(`users/${userName}`));
  }

  getRepositoriesList(userName: string): Observable<any> {
    return this.get(this.concatUrl(`users/${userName}/repos`));
  }

  getRepositoryFullInfo(ownerName: string, repositoryName: string): Observable<any> {
    return this.get(this.concatUrl(`repos/${ownerName}/${repositoryName}`));
  }
}
