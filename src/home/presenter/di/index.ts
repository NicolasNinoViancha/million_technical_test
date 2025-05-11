import {infrastructureInjection} from '@core/infrastructure';
import {HomeRepositoryImpl} from '@home/infrastructure/repositories';
import {HomeUseCasesImpl} from '@home/application';

const infrastructureInstance = infrastructureInjection();
const homeRepositoryInstance = new HomeRepositoryImpl(
  infrastructureInstance.http,
);
const homeUseCasesInstance = {
  homeUseCases: new HomeUseCasesImpl(homeRepositoryInstance),
};

export default homeUseCasesInstance;
