import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListOfRepositoriesComponent } from '@repositories/components/list-of-repositories/list-of-repositories.component';
import { RepositoryDetailsComponent } from '@repositories/components/repository-details/repository-details.component';
import { ContributorDetailsComponent } from '@repositories/components/contributor-details/contributor-details.component';

const routes: Routes = [
  {
    path: '',
    component: ListOfRepositoriesComponent
  },
  {
    path: ':user/contribution',
    component: ContributorDetailsComponent
  },
  {
    path: ':owner/:repository',
    component: RepositoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RepositoriesRoutes { }
