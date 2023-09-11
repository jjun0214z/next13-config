type IApiMethod = 'get' | 'post' | 'put' | 'delete';

export interface IApi {
  method: IApiMethod;
  url: string;
}
