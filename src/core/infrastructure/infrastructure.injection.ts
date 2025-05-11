import {HttpClient} from '@core/httpClient';
import {InfrastructureModels} from './models';

export const infrastructureInjection = (): InfrastructureModels.Injection => {
  const httpInstance = new HttpClient();
  return {
    http: httpInstance,
  };
};
