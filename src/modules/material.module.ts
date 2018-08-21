import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatPaginatorModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatPaginatorModule
];

@NgModule({
  imports: [],
  exports: [...materialModules],
  declarations: []
})
export class MaterialModule { }
