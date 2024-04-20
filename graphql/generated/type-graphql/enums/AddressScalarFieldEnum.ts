import * as TypeGraphQL from 'type-graphql';

export enum AddressScalarFieldEnum {
  id = 'id',
  code = 'code',
  c1 = 'c1',
  c2 = 'c2',
  c3 = 'c3',
  c4 = 'c4',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
TypeGraphQL.registerEnumType(AddressScalarFieldEnum, {
  name: 'AddressScalarFieldEnum',
  description: undefined,
});
