export namespace HttpClientModels {
  export type Method = 'post' | 'get' | 'put' | 'delete' | 'patch';
  export type Request = {
    url: string;
    method: Method;
    data?: any;
    headers?: any;
    signal?: AbortSignal;
  };
  export interface HttpClient {
    request<T>(data: Request): Promise<T>;
  }
}
