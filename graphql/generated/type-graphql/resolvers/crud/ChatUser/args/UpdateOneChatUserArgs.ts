import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChatUserUpdateInput } from '../../../inputs/ChatUserUpdateInput';
import { ChatUserWhereUniqueInput } from '../../../inputs/ChatUserWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOneChatUserArgs {
  @TypeGraphQL.Field((_type) => ChatUserUpdateInput, {
    nullable: false,
  })
  data!: ChatUserUpdateInput;

  @TypeGraphQL.Field((_type) => ChatUserWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatUserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
