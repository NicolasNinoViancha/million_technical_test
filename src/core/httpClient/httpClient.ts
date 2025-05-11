import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import {HttpClientModels} from './models';
import {ErrorHandlerModels} from '../errorHandler/models';

export class HttpClient implements HttpClientModels.HttpClient {
  private _fetchInstance: AxiosInstance;
  private readonly _TIME_OUT = 5000;
  constructor() {
    const instanceAxios = axios.create({timeout: this._TIME_OUT});
    instanceAxios.interceptors.response.use(
      this.responseHandler,
      this.responseError,
    );
    this._fetchInstance = instanceAxios;
  }
  private async responseError(error: any) {
    const isAxiosError = error instanceof AxiosError;
    if (isAxiosError) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return Promise.reject(
        new Error(
          `[${ErrorHandlerModels.Type.CORE}-httpClient]: The request failed - ${error.message}`,
        ),
      );
    }
    const isRequestError = !!error.request;
    if (isRequestError) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return Promise.reject(
        new Error(
          `[${ErrorHandlerModels.Type.CORE}-httpClient]: No response was received from the server.`,
        ),
      );
    }
    // Something happened in setting up the request that triggered an Error
    return Promise.reject(
      new Error(
        `[${ErrorHandlerModels.Type.CORE}-httpClient]: setting bad the request`,
      ),
    );
  }
  private responseHandler(response: AxiosResponse<any, any>) {
    return response;
  }
  async request<T>({
    url,
    method,
    data,
    headers,
    signal,
    params,
  }: HttpClientModels.Request): Promise<T> {
    const response = await this._fetchInstance.request({
      url,
      method,
      data,
      headers,
      signal,
      params,
    });
    return response.data;
  }
}
