import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChatMessageCreateInput } from '../../../inputs/ChatMessageCreateInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class CreateOneChatMessageArgs {
  @TypeGraphQL.Field((_type) => ChatMessageCreateInput, {
    nullable: false,
  })
  data!: ChatMessageCreateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
