import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContributorsService } from '@repositories/services/contributors.service';
import { drawContributions } from "github-contributions-canvas";

@Component({
  selector: 'app-contributor-details',
  templateUrl: './contributor-details.component.html',
  styleUrls: ['./contributor-details.component.scss']
})
export class ContributorDetailsComponent implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;

  private _loading = false;

  get loading(): boolean {
    return this._loading;
  }

  private _contributorInfo;

  get contribution() {
    return this._contributorInfo;
  }

  constructor(private _contributionService: ContributorsService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.forEach((param: Params) => {
      if (param['user']) {
        this.getContributorDetails(param['user']);
      }
    })
  }

  getContributorDetails(userName: string) {
    this._loading = true;
    this._contributionService.getContributorDetailInfo(userName).subscribe((contributions: any) => {
      this._contributorInfo = contributions;
      this.draw(userName);
    }, error => {
      this._loading = false;
    })
  }

  draw(userName) {
    drawContributions(this.canvas.nativeElement, {
      data: this.contribution,
      username: userName,
      themeName: 'standart'
    });

    this._loading = false;
  }

}
