import * as TypeGraphQL from 'type-graphql';

export enum ChatUserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  chatId = 'chatId',
  userId = 'userId',
}
TypeGraphQL.registerEnumType(ChatUserScalarFieldEnum, {
  name: 'ChatUserScalarFieldEnum',
  description: undefined,
});
