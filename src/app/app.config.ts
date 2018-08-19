import { environment } from '@ENV'
import { IHttpConfig } from '@connection/models/IHttpConfig';
import { IConnectionConfig } from '@connection/models/connection.config';

export class AppConfig implements IConnectionConfig {
  httpConfig: IHttpConfig = environment.Http;
}
