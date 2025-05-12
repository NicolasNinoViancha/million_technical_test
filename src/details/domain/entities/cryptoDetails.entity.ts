export interface CryptoDetailsEntity {
  id: string;
  symbol: string;
  name: string;
  rank: number;
  priceUSD: string;
  percentChange24h: string;
  percentChange1h: string;
  percentChange7d: string;
  priceBTC: string;
  marketCapUSD: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
}
