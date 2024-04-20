import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CommentUpdateInput } from '../../../inputs/CommentUpdateInput';
import { CommentWhereUniqueInput } from '../../../inputs/CommentWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOneCommentArgs {
  @TypeGraphQL.Field((_type) => CommentUpdateInput, {
    nullable: false,
  })
  data!: CommentUpdateInput;

  @TypeGraphQL.Field((_type) => CommentWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
