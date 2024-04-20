import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostFileWhereInput } from '../../inputs/PostFileWhereInput';

@TypeGraphQL.ArgsType()
export class FileCountPostsArgs {
  @TypeGraphQL.Field((_type) => PostFileWhereInput, {
    nullable: true,
  })
  where?: PostFileWhereInput | undefined;
}
