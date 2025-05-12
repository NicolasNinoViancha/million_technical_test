import {HttpClientModels} from '@core/httpClient';
import {CryptoEntity} from '@home/domain/entities';
import {CryptoDto} from '@home/infrastructure/dto';
import {HomeRepositoryModels} from '@home/domain/repositories';
import {CryptoAdapter} from '@home/infrastructure/adapters';
import {makeApiUrl} from '@core/utils';
export class HomeRepositoryImpl implements HomeRepositoryModels.Repository {
  static ITEMS_PER_PAGE = 20;
  constructor(private readonly http: HttpClientModels.HttpClient) {}
  async getCryptoList(startItem: number): Promise<CryptoEntity[]> {
    const url = makeApiUrl(HomeRepositoryModels.URLs.CRYPTO_LIST);
    try {
      const response = await this.http.request<{data: CryptoDto[]}>({
        method: 'get',
        url,
        params: {
          start: startItem,
          limit: HomeRepositoryImpl.ITEMS_PER_PAGE,
        },
      });
      return response.data.map(e => CryptoAdapter.fromDto(e));
    } catch (error: any) {
      return Promise.reject(new Error(error.message));
    }
  }
}
