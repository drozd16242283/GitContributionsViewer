import { Inject } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConnectionConfig, IConnectionConfig } from '@connection/models/connection.config';

export abstract class BaseHttpService extends HttpClient {

  protected get _githubApiUrl(): any {
    return this._config.httpConfig.github;
  }

  constructor(@Inject(HttpHandler) handler: HttpHandler,
              @Inject(ConnectionConfig) protected _config: IConnectionConfig) {
    super(handler);
  }

  protected concatUrl(url: string): string {
    return this._githubApiUrl + url;
  }
}
