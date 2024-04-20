import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CommentCreateInput } from '../../../inputs/CommentCreateInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class CreateOneCommentArgs {
  @TypeGraphQL.Field((_type) => CommentCreateInput, {
    nullable: false,
  })
  data!: CommentCreateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
