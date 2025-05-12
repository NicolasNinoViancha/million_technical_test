import {CryptoDetailsEntity} from '../entities';

export namespace DetailsUseCasesModels {
  export interface UseCase {
    getCryptoDetails(cryptoID: string): Promise<CryptoDetailsEntity>;
  }
}
