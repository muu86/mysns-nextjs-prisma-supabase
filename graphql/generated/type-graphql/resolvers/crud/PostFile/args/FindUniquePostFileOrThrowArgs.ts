import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostFileWhereUniqueInput } from '../../../inputs/PostFileWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class FindUniquePostFileOrThrowArgs {
  @TypeGraphQL.Field((_type) => PostFileWhereUniqueInput, {
    nullable: false,
  })
  where!: PostFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
