import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConnectionConfig, IConnectionConfig } from '@connection/models/connection.config';

import { RepositoriesHttpService } from '@connection/services/repositories-http.service';
import { ContributorsHttpService } from '@connection/services/contributors-http.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ]
})
export class ConnectionModule {
  static forRoot(config: typeof IConnectionConfig): ModuleWithProviders {
    return {
      ngModule: ConnectionModule,
      providers: [
        {
          provide: ConnectionConfig,
          useExisting: config
        },
        RepositoriesHttpService,
        ContributorsHttpService
      ]
    }
  }
}
