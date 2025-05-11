import {CryptoEntity} from '../entities';

export namespace HomeRepositoryModels {
  export enum URLs {
    CRYPTO_LIST = '/tickers/',
  }
  export interface Repository {
    getCryptoList(startItem: number): Promise<CryptoEntity[]>;
  }
}
