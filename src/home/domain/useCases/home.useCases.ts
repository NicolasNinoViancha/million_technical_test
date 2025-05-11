import {CryptoEntity} from '../entities';

export namespace HomeUseCasesModels {
  export interface CreatePasswordEntity {
    password: string;
    passwordConfirmation: string;
  }
  export interface UseCase {
    getCryptoList(startItem: number): Promise<CryptoEntity[]>;
  }
}
