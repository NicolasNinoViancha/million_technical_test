import {ZodError} from 'zod';
import {CryptoEntity} from '@home/domain/entities';
import {HomeRepositoryModels} from '@home/domain/repositories';
import {HomeUseCasesModels} from '@home/domain/useCases';
import {HomeValidators} from './home.validators';
import {ErrorHandler} from '@core/errorHandler';

export class HomeUseCasesImpl implements HomeUseCasesModels.UseCase {
  constructor(private readonly repository: HomeRepositoryModels.Repository) {}

  async getCryptoList(startItem: number): Promise<CryptoEntity[]> {
    try {
      HomeValidators.validateGetCryptoListData(startItem);
      return await this.repository.getCryptoList(startItem);
    } catch (error: any) {
      const isZodError = error instanceof ZodError;
      if (isZodError) {
        const errorMessage = ErrorHandler.ZodError(error, 'home');
        return Promise.reject(new Error(errorMessage));
      }
      return Promise.reject(new Error(error.message));
    }
  }
}
