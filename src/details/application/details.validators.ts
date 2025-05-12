import {DETAILS_SCHEMES} from './details.schemes';
export class DetailsValidators {
  static validateGetCryptoDetailsData(cryptoID: string) {
    DETAILS_SCHEMES.shape.cryptoID.parse(cryptoID);
    return;
  }
}
