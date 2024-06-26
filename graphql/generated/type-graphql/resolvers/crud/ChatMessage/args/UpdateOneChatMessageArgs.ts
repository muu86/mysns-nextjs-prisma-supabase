import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChatMessageUpdateInput } from '../../../inputs/ChatMessageUpdateInput';
import { ChatMessageWhereUniqueInput } from '../../../inputs/ChatMessageWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOneChatMessageArgs {
  @TypeGraphQL.Field((_type) => ChatMessageUpdateInput, {
    nullable: false,
  })
  data!: ChatMessageUpdateInput;

  @TypeGraphQL.Field((_type) => ChatMessageWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
