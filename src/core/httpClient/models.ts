export namespace HttpClientModels {
  type Params = {
    [key: string]: string | number;
  };
  export type Method = 'post' | 'get' | 'put' | 'delete' | 'patch';
  export type Request = {
    url: string;
    method: Method;
    data?: any;
    headers?: any;
    signal?: AbortSignal;
    params?: Params;
  };
  export interface HttpClient {
    request<T>(data: Request): Promise<T>;
  }
}
