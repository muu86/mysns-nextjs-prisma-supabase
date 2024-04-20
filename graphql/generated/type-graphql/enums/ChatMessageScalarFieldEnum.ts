import * as TypeGraphQL from 'type-graphql';

export enum ChatMessageScalarFieldEnum {
  id = 'id',
  message = 'message',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  chatId = 'chatId',
  userId = 'userId',
}
TypeGraphQL.registerEnumType(ChatMessageScalarFieldEnum, {
  name: 'ChatMessageScalarFieldEnum',
  description: undefined,
});
