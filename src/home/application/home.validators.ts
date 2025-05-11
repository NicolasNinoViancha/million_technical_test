import {HOME_SCHEMES} from './home.schemes';
export class HomeValidators {
  static validateGetCryptoListData(startItem: number) {
    HOME_SCHEMES.shape.startItem.parse(startItem);
    return;
  }
}
