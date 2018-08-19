import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RepositoriesService } from '@repositories/services/repositories.service';
import { IRepositoryDetailInfo } from '@repositories/models/repository';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepositoryDetailsComponent implements OnInit {
  private _repositoryDetailInfo: IRepositoryDetailInfo;

  get repositoryDetailInfo(): IRepositoryDetailInfo {
    return this._repositoryDetailInfo;
  }

  set repositoryDetailInfo(value: IRepositoryDetailInfo) {
    this._repositoryDetailInfo = value;
  }

  constructor(private _activatedRoute: ActivatedRoute,
              private _repositoriesService: RepositoriesService) { }

  ngOnInit() {
    this._activatedRoute.params.forEach((params: Params) => {
      if (params['owner'] && params['repository']) {
        this.getRepositoryDetailInfo(params['owner'], params['repository']);
      }
    })
  }

  getRepositoryDetailInfo(ownerName: string, repositoryName: string) {
    this._repositoriesService.getRepositoryDetailInfo(ownerName, repositoryName)
      .subscribe((response: IRepositoryDetailInfo) => this.repositoryDetailInfo = response);
  }

}
