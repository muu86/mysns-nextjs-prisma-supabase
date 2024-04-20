import * as TypeGraphQL from 'type-graphql';

export enum PostFileScalarFieldEnum {
  id = 'id',
  postId = 'postId',
  fileId = 'fileId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
TypeGraphQL.registerEnumType(PostFileScalarFieldEnum, {
  name: 'PostFileScalarFieldEnum',
  description: undefined,
});
