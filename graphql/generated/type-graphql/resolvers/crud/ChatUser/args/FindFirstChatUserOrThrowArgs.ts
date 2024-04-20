import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChatUserOrderByWithRelationInput } from '../../../inputs/ChatUserOrderByWithRelationInput';
import { ChatUserWhereInput } from '../../../inputs/ChatUserWhereInput';
import { ChatUserWhereUniqueInput } from '../../../inputs/ChatUserWhereUniqueInput';
import { ChatUserScalarFieldEnum } from '../../../../enums/ChatUserScalarFieldEnum';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class FindFirstChatUserOrThrowArgs {
  @TypeGraphQL.Field((_type) => ChatUserWhereInput, {
    nullable: true,
  })
  where?: ChatUserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ChatUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ChatUserWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ChatUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'id' | 'createdAt' | 'updatedAt' | 'chatId' | 'userId'> | undefined;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
