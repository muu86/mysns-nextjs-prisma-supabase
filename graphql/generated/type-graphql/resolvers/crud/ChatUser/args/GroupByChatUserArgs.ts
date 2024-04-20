import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChatUserOrderByWithAggregationInput } from '../../../inputs/ChatUserOrderByWithAggregationInput';
import { ChatUserScalarWhereWithAggregatesInput } from '../../../inputs/ChatUserScalarWhereWithAggregatesInput';
import { ChatUserWhereInput } from '../../../inputs/ChatUserWhereInput';
import { ChatUserScalarFieldEnum } from '../../../../enums/ChatUserScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class GroupByChatUserArgs {
  @TypeGraphQL.Field((_type) => ChatUserWhereInput, {
    nullable: true,
  })
  where?: ChatUserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ChatUserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<'id' | 'createdAt' | 'updatedAt' | 'chatId' | 'userId'>;

  @TypeGraphQL.Field((_type) => ChatUserScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ChatUserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
