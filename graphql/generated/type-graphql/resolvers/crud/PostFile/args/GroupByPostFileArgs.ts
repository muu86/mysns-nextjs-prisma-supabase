import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostFileOrderByWithAggregationInput } from '../../../inputs/PostFileOrderByWithAggregationInput';
import { PostFileScalarWhereWithAggregatesInput } from '../../../inputs/PostFileScalarWhereWithAggregatesInput';
import { PostFileWhereInput } from '../../../inputs/PostFileWhereInput';
import { PostFileScalarFieldEnum } from '../../../../enums/PostFileScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class GroupByPostFileArgs {
  @TypeGraphQL.Field((_type) => PostFileWhereInput, {
    nullable: true,
  })
  where?: PostFileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [PostFileOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: PostFileOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<'id' | 'postId' | 'fileId' | 'createdAt' | 'updatedAt'>;

  @TypeGraphQL.Field((_type) => PostFileScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: PostFileScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
