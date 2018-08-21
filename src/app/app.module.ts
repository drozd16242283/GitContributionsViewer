// App core modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutes } from '@app/app-routes';

// Custom modules
import { ConnectionModule } from '@connection/connection.module';
import { MaterialModule } from 'modules/material.module';

// Components
import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './components/layouts/navbar-header/navbar-header.component';

// Services
import { AppConfig } from '@app/app.config';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutes,
    ConnectionModule.forRoot(AppConfig),
    MaterialModule,
  ],
  providers: [
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
