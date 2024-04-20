import * as TypeGraphQL from 'type-graphql';

export enum UserAddressScalarFieldEnum {
  id = 'id',
  userId = 'userId',
  addressId = 'addressId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
TypeGraphQL.registerEnumType(UserAddressScalarFieldEnum, {
  name: 'UserAddressScalarFieldEnum',
  description: undefined,
});
