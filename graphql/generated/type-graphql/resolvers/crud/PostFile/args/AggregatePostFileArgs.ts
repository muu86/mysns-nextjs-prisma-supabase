import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostFileOrderByWithRelationInput } from '../../../inputs/PostFileOrderByWithRelationInput';
import { PostFileWhereInput } from '../../../inputs/PostFileWhereInput';
import { PostFileWhereUniqueInput } from '../../../inputs/PostFileWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class AggregatePostFileArgs {
  @TypeGraphQL.Field((_type) => PostFileWhereInput, {
    nullable: true,
  })
  where?: PostFileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [PostFileOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: PostFileOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => PostFileWhereUniqueInput, {
    nullable: true,
  })
  cursor?: PostFileWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
