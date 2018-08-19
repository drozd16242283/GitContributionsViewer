import { Component, Input } from '@angular/core';
import { IRepository } from '@repositories/models/repository';

@Component({
  selector: 'app-repository-item',
  templateUrl: './repository-item.component.html',
  styleUrls: ['./repository-item.component.scss']
})
export class RepositoryItemComponent {
  private _repository: IRepository;

  @Input() set repository(value: IRepository) {
    this._repository = value;
  }

  get repository(): IRepository {
    return this._repository;
  }

  get linkToRepository(): string {
    return `${this.repository.owner}/${this.repository.name}`;
  }

  constructor() { }

}
