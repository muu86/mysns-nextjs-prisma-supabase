import * as TypeGraphQL from 'type-graphql';

export enum FileStorageType {
  S3 = 'S3',
}
TypeGraphQL.registerEnumType(FileStorageType, {
  name: 'FileStorageType',
  description: undefined,
});
