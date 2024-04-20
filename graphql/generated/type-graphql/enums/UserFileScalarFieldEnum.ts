import * as TypeGraphQL from 'type-graphql';

export enum UserFileScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  fileId = 'fileId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
TypeGraphQL.registerEnumType(UserFileScalarFieldEnum, {
  name: 'UserFileScalarFieldEnum',
  description: undefined,
});
