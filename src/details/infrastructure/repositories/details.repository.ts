import {HttpClientModels} from '@core/httpClient';
import {CryptoDetailsEntity} from '@details/domain/entities';
import {CryptoDetailsDto} from '@details/infrastructure/dto';
import {DetailsRepositoryModels} from '@details/domain/repositories';
import {CryptoDetailsAdapter} from '@details/infrastructure/adapters';
import {makeApiUrl} from '@core/utils';
export class DetailsRepositoryImpl
  implements DetailsRepositoryModels.Repository
{
  constructor(private readonly http: HttpClientModels.HttpClient) {}
  async getCryptoDetails(cryptoID: string): Promise<CryptoDetailsEntity> {
    const url = makeApiUrl(DetailsRepositoryModels.URLs.CRYPTO_DETAILS);
    try {
      const response = await this.http.request<CryptoDetailsDto[]>({
        method: 'get',
        url,
        params: {
          id: cryptoID,
        },
      });
      return CryptoDetailsAdapter.fromDto(response[0]);
    } catch (error: any) {
      return Promise.reject(new Error(error.message));
    }
  }
}
