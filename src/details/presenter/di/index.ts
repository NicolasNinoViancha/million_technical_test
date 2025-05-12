import {infrastructureInjection} from '@core/infrastructure';
import {DetailsRepositoryImpl} from '@details/infrastructure/repositories';
import {DetailsUseCasesImpl} from '@details/application';

const infrastructureInstance = infrastructureInjection();
const detailsRepositoryInstance = new DetailsRepositoryImpl(
  infrastructureInstance.http,
);
const detailsUseCasesInstance = {
  detailsUseCases: new DetailsUseCasesImpl(detailsRepositoryInstance),
};

export default detailsUseCasesInstance;
