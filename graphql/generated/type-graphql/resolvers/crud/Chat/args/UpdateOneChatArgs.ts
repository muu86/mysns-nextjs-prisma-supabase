import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChatUpdateInput } from '../../../inputs/ChatUpdateInput';
import { ChatWhereUniqueInput } from '../../../inputs/ChatWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOneChatArgs {
  @TypeGraphQL.Field((_type) => ChatUpdateInput, {
    nullable: false,
  })
  data!: ChatUpdateInput;

  @TypeGraphQL.Field((_type) => ChatWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
