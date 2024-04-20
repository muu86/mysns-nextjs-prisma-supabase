import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostFileCreateInput } from '../../../inputs/PostFileCreateInput';
import { PostFileUpdateInput } from '../../../inputs/PostFileUpdateInput';
import { PostFileWhereUniqueInput } from '../../../inputs/PostFileWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpsertOnePostFileArgs {
  @TypeGraphQL.Field((_type) => PostFileWhereUniqueInput, {
    nullable: false,
  })
  where!: PostFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostFileCreateInput, {
    nullable: false,
  })
  create!: PostFileCreateInput;

  @TypeGraphQL.Field((_type) => PostFileUpdateInput, {
    nullable: false,
  })
  update!: PostFileUpdateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
