import * as TypeGraphQL from 'type-graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  content = 'content',
  babyBirth = 'babyBirth',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  email = 'email',
  emailVerified = 'emailVerified',
  image = 'image',
  name = 'name',
  username = 'username',
  role = 'role',
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
