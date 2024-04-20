import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostFileUpdateInput } from '../../../inputs/PostFileUpdateInput';
import { PostFileWhereUniqueInput } from '../../../inputs/PostFileWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOnePostFileArgs {
  @TypeGraphQL.Field((_type) => PostFileUpdateInput, {
    nullable: false,
  })
  data!: PostFileUpdateInput;

  @TypeGraphQL.Field((_type) => PostFileWhereUniqueInput, {
    nullable: false,
  })
  where!: PostFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
