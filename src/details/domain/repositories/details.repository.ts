import {CryptoDetailsEntity} from '../entities';

export namespace DetailsRepositoryModels {
  export enum URLs {
    CRYPTO_DETAILS = '/ticker/',
  }
  export interface Repository {
    getCryptoDetails(cryptoID: string): Promise<CryptoDetailsEntity>;
  }
}
