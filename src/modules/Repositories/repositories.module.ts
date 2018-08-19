import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { RepositoriesRoutes } from '@repositories/repositories-routes';
import { RepositoriesService } from '@repositories/services/repositories.service';
import { ContributorsService } from '@repositories/services/contributors.service';

import { ListOfRepositoriesComponent } from './components/list-of-repositories/list-of-repositories.component';
import { RepositoryItemComponent } from './components/repository-item/repository-item.component';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';
import { RepositoryOwnerComponent } from './components/repository-owner/repository-owner.component';
import { ContributorsListComponent } from './components/contributors-list/contributors-list.component';
import { ContributorsItemComponent } from '@repositories/components/contributors-item/contributors-item.component';
import { ContributorDetailsComponent } from '@repositories/components/contributor-details/contributor-details.component';

@NgModule({
  imports: [
    CommonModule,
    RepositoriesRoutes,
    MaterialModule
  ],
  providers: [
    RepositoriesService,
    ContributorsService
  ],
  declarations: [
    ListOfRepositoriesComponent,
    RepositoryItemComponent,
    RepositoryDetailsComponent,
    RepositoryOwnerComponent,
    ContributorsListComponent,
    ContributorsItemComponent,
    ContributorDetailsComponent
  ],
  exports: [
    RepositoryItemComponent,
    RepositoryOwnerComponent,
    ContributorsListComponent,
    ContributorsItemComponent
  ]
})
export class RepositoriesModule { }
