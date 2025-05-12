import {ZodError} from 'zod';
import {CryptoDetailsEntity} from '@details/domain/entities';
import {DetailsRepositoryModels} from '@details/domain/repositories';
import {DetailsUseCasesModels} from '@details/domain/useCases';
import {DetailsValidators} from './details.validators';
import {ErrorHandler} from '@core/errorHandler';

export class DetailsUseCasesImpl implements DetailsUseCasesModels.UseCase {
  constructor(
    private readonly repository: DetailsRepositoryModels.Repository,
  ) {}

  async getCryptoDetails(cryptoID: string): Promise<CryptoDetailsEntity> {
    try {
      DetailsValidators.validateGetCryptoDetailsData(cryptoID);
      return await this.repository.getCryptoDetails(cryptoID);
    } catch (error: any) {
      const isZodError = error instanceof ZodError;
      if (isZodError) {
        const errorMessage = ErrorHandler.ZodError(error, 'details');
        return Promise.reject(new Error(errorMessage));
      }
      return Promise.reject(new Error(error.message));
    }
  }
}
