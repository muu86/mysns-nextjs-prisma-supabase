import * as TypeGraphQL from 'type-graphql';

export enum FileScalarFieldEnum {
  id = 'id',
  location = 'location',
  type = 'type',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
TypeGraphQL.registerEnumType(FileScalarFieldEnum, {
  name: 'FileScalarFieldEnum',
  description: undefined,
});
