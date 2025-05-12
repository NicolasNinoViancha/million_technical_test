import {CryptoDetailsEntity} from '@details/domain/entities';
import {CryptoDetailsDto} from '../dto';

export class CryptoDetailsAdapter {
  static fromDto(dto: CryptoDetailsDto): CryptoDetailsEntity {
    if (!dto.id) {
      throw new Error('Error:Crypto details data invalid');
    }
    return {
      id: dto.id ?? '',
      symbol: dto.symbol ?? '',
      name: dto.name ?? '',
      rank: dto.rank ?? 0,
      priceUSD: dto.price_usd ?? '',
      percentChange24h: dto.percent_change_24h ?? '',
      percentChange1h: dto.percent_change_1h ?? '',
      percentChange7d: dto.percent_change_7d ?? '',
      priceBTC: dto.price_btc ?? '',
      marketCapUSD: dto.market_cap_usd ?? '',
      volume24: dto.volume24 ?? 0,
      volume24a: dto.volume24a ?? 0,
      csupply: dto.csupply ?? '',
      tsupply: dto.tsupply ?? '',
      msupply: dto.msupply ?? '',
    };
  }
}
