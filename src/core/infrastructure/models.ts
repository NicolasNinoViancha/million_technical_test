import {HttpClientModels} from '@core/httpClient';

export namespace InfrastructureModels {
  export interface Injection {
    http: HttpClientModels.HttpClient;
  }
}
