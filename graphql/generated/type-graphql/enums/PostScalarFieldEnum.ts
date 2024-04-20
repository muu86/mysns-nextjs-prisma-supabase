import * as TypeGraphQL from 'type-graphql';

export enum PostScalarFieldEnum {
  id = 'id',
  content = 'content',
  addressId = 'addressId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
}
TypeGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: 'PostScalarFieldEnum',
  description: undefined,
});
