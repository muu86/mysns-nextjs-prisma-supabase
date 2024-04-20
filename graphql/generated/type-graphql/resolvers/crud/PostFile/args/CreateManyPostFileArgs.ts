import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostFileCreateManyInput } from '../../../inputs/PostFileCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyPostFileArgs {
  @TypeGraphQL.Field((_type) => [PostFileCreateManyInput], {
    nullable: false,
  })
  data!: PostFileCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
