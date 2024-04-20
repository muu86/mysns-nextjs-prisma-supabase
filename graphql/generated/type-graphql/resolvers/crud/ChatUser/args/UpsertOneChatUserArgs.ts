import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChatUserCreateInput } from '../../../inputs/ChatUserCreateInput';
import { ChatUserUpdateInput } from '../../../inputs/ChatUserUpdateInput';
import { ChatUserWhereUniqueInput } from '../../../inputs/ChatUserWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpsertOneChatUserArgs {
  @TypeGraphQL.Field((_type) => ChatUserWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatUserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatUserCreateInput, {
    nullable: false,
  })
  create!: ChatUserCreateInput;

  @TypeGraphQL.Field((_type) => ChatUserUpdateInput, {
    nullable: false,
  })
  update!: ChatUserUpdateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
