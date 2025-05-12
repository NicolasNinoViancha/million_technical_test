import {CryptoEntity} from '../entities';

export namespace HomeUseCasesModels {
  export interface UseCase {
    getCryptoList(startItem: number): Promise<CryptoEntity[]>;
  }
}
