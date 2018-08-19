import { InjectionToken } from '@angular/core';
import { IHttpConfig } from '@connection/models/IHttpConfig';

export abstract class IConnectionConfig {
  httpConfig: IHttpConfig;
}

export const ConnectionConfig = new InjectionToken<IConnectionConfig>('connection.config');
