declare interface IResponse<T = unknown> {
  code: string;
  message: string;
  data: T;
}

declare interface IResponsePagination<T = unknown> extends IResponse<T> {
  total: number;
}

declare interface IPageRequest {
  page: number;
  pageSize: number;
}
