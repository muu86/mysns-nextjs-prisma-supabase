import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostFileCreateInput } from '../../../inputs/PostFileCreateInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class CreateOnePostFileArgs {
  @TypeGraphQL.Field((_type) => PostFileCreateInput, {
    nullable: false,
  })
  data!: PostFileCreateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
