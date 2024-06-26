import * as TypeGraphQL from 'type-graphql';

export enum AccountScalarFieldEnum {
  type = 'type',
  provider = 'provider',
  providerAccountId = 'providerAccountId',
  refresh_token = 'refresh_token',
  access_token = 'access_token',
  expires_at = 'expires_at',
  token_type = 'token_type',
  scope = 'scope',
  id_token = 'id_token',
  session_state = 'session_state',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
}
TypeGraphQL.registerEnumType(AccountScalarFieldEnum, {
  name: 'AccountScalarFieldEnum',
  description: undefined,
});
