import { Component, OnInit, Input } from '@angular/core';
import { ContributorsService } from '@repositories/services/contributors.service';
import { IContributor } from '@repositories/models/contributors';

@Component({
  selector: 'app-contributors-list',
  templateUrl: './contributors-list.component.html',
  styleUrls: ['./contributors-list.component.scss']
})
export class ContributorsListComponent implements OnInit {
  @Input() owner;
  @Input() repository;

  private _loading = false;

  get loading(): boolean {
    return this._loading;
  }

  private _contributorsList: IContributor[] = [];

  get contributorsList(): IContributor[] {
    return this._contributorsList;
  }

  constructor(private _contributorsService: ContributorsService) { }

  ngOnInit() {
    this.getContributorsList(this.owner, this.repository);
  }

  getContributorsList(owner: string, repository: string) {
    this._loading = true;
    this._contributorsService.getContributorsList(owner, repository).subscribe(
      (contributors: any) => {
        this._contributorsList = contributors;
        this._loading = false;
      }, error => {
        this._loading = false;
      })
  }

}
