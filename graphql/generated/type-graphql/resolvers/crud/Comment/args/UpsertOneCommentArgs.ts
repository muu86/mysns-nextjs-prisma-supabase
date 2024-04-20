import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CommentCreateInput } from '../../../inputs/CommentCreateInput';
import { CommentUpdateInput } from '../../../inputs/CommentUpdateInput';
import { CommentWhereUniqueInput } from '../../../inputs/CommentWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpsertOneCommentArgs {
  @TypeGraphQL.Field((_type) => CommentWhereUniqueInput, {
    nullable: false,
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CommentCreateInput, {
    nullable: false,
  })
  create!: CommentCreateInput;

  @TypeGraphQL.Field((_type) => CommentUpdateInput, {
    nullable: false,
  })
  update!: CommentUpdateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
