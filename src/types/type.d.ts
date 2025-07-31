// 指定属性变为可选
type PartialByKeys<T, K extends keyof any> = Omit<T, Extract<K, keyof T>>
  & Partial<Pick<T, Extract<K, keyof T>>>;

// 指定属性变为必选
declare type RequiredByKeys<T, K extends keyof any> = Omit<
  T,
  Extract<K, keyof T>
>
& Required<Pick<T, Extract<K, keyof T>>>;

// 指定属性变为只读
declare type ReadonlyByKeys<T, K extends keyof any> = Omit<
  T,
  Extract<K, keyof T>
>
& Readonly<Pick<T, Extract<K, keyof T>>>;

// 去除只读
declare type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

// 合并类型
declare type Merge<T, U> = Omit<T, keyof U> & U;

// 递归可选
declare type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// 递归只读
declare type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
