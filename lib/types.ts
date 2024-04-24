export type ImageFile = {
  tempUrl: string;
  file: File;
  s3Key?: string;
};

export type GetDeepProp<T extends object, K extends string> = K extends keyof T
  ? T[K]
  : { [P in keyof T]: GetDeepProp<Extract<T[P], object>, K> }[keyof T];
