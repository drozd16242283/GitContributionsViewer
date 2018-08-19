import { Component, Input } from '@angular/core';
import { IContributor } from '@repositories/models/contributors';

@Component({
  selector: 'app-contributors-item',
  templateUrl: './contributors-item.component.html',
  styleUrls: ['./contributors-item.component.scss']
})
export class ContributorsItemComponent {
  private _contributor: IContributor;

  @Input() set contributor(value: IContributor) {
    this._contributor = value;
  }

  get contributor(): IContributor {
    return this._contributor;
  }

  get contributorUrl(): string {
    return `/repositories/${this._contributor.login}/contribution`;
  }

  constructor() { }

}
