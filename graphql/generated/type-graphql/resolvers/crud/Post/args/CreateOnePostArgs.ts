import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostCreateInput } from '../../../inputs/PostCreateInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class CreateOnePostArgs {
  @TypeGraphQL.Field((_type) => PostCreateInput, {
    nullable: false,
  })
  data!: PostCreateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
