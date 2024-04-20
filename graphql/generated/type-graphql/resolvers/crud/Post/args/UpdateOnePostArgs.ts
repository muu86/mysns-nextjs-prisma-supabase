import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostUpdateInput } from '../../../inputs/PostUpdateInput';
import { PostWhereUniqueInput } from '../../../inputs/PostWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOnePostArgs {
  @TypeGraphQL.Field((_type) => PostUpdateInput, {
    nullable: false,
  })
  data!: PostUpdateInput;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
