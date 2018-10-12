import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '@repositories/services/repositories.service';
import { IRepositoryOwner, IRepository } from '@repositories/models/repository';

const DEFAULT_USER = 'drozd16242283';

@Component({
  selector: 'app-list-of-repositories',
  templateUrl: './list-of-repositories.component.html',
  styleUrls: ['./list-of-repositories.component.scss']
})
export class ListOfRepositoriesComponent implements OnInit {
  public searchUser = DEFAULT_USER;

  private _loading = false;

  get loading(): boolean {
    return this._loading;
  }

  private _repositoryOwner: IRepositoryOwner;

  get repositoryOwner(): IRepositoryOwner {
    return this._repositoryOwner;
  }

  private _repositoriesList: IRepository[] = [];

  get repositoriesList(): IRepository[] {
    return this._repositoriesList;
  }

  constructor(private _repositoriesService: RepositoriesService) { }

  ngOnInit() {
    this.getRepositoryFullInfo(this.searchUser);
  }

  getRepositoryFullInfo(userName: string) {
    this._loading = true;
    this._repositoriesService.fetchUserAndRepositoriesList(userName).subscribe(repositoryFullInfo => {
      this._repositoryOwner = repositoryFullInfo[0];
      this._repositoriesList = repositoryFullInfo[1];
      this._loading = false;
    }, error => {
      this._loading = false;
    });
  }

  searchRepository(searchValue: string) {
    this.getRepositoryFullInfo(searchValue);
    this.searchUser = searchValue;
  }

}
