import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const gitRoutes: Routes = [
  {
    path: '',

  }
]

@NgModule({
  imports: [RouterModule.forChild(gitRoutes)],
  exports: [RouterModule]
})

export class GitRoutes { }
