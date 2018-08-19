import { Component, Input } from '@angular/core';
import { IRepositoryOwner } from '@repositories/models/repository';

@Component({
  selector: 'app-repository-owner',
  templateUrl: './repository-owner.component.html',
  styleUrls: ['./repository-owner.component.scss']
})
export class RepositoryOwnerComponent {
  private _repositoryOwner: IRepositoryOwner;

  @Input() set repositoryOwner(value: IRepositoryOwner) {
    this._repositoryOwner = value;
  }

  get repositoryOwner(): IRepositoryOwner {
    return this._repositoryOwner;
  }

  constructor() { }
}
