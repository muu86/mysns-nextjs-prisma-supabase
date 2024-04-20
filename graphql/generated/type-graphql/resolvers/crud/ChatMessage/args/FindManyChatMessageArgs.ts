import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChatMessageOrderByWithRelationInput } from '../../../inputs/ChatMessageOrderByWithRelationInput';
import { ChatMessageWhereInput } from '../../../inputs/ChatMessageWhereInput';
import { ChatMessageWhereUniqueInput } from '../../../inputs/ChatMessageWhereUniqueInput';
import { ChatMessageScalarFieldEnum } from '../../../../enums/ChatMessageScalarFieldEnum';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class FindManyChatMessageArgs {
  @TypeGraphQL.Field((_type) => ChatMessageWhereInput, {
    nullable: true,
  })
  where?: ChatMessageWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ChatMessageOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ChatMessageWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ChatMessageWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'id' | 'message' | 'createdAt' | 'updatedAt' | 'chatId' | 'userId'> | undefined;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
