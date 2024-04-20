import * as TypeGraphQL from 'type-graphql';

export enum SessionScalarFieldEnum {
  sessionToken = 'sessionToken',
  expires = 'expires',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
}
TypeGraphQL.registerEnumType(SessionScalarFieldEnum, {
  name: 'SessionScalarFieldEnum',
  description: undefined,
});
