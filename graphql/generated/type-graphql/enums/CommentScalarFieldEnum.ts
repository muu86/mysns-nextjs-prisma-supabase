import * as TypeGraphQL from 'type-graphql';

export enum CommentScalarFieldEnum {
  id = 'id',
  content = 'content',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
  postId = 'postId',
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: 'CommentScalarFieldEnum',
  description: undefined,
});
