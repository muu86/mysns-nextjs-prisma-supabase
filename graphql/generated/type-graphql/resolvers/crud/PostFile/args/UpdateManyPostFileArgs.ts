import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { PostFileUpdateManyMutationInput } from '../../../inputs/PostFileUpdateManyMutationInput';
import { PostFileWhereInput } from '../../../inputs/PostFileWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyPostFileArgs {
  @TypeGraphQL.Field((_type) => PostFileUpdateManyMutationInput, {
    nullable: false,
  })
  data!: PostFileUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => PostFileWhereInput, {
    nullable: true,
  })
  where?: PostFileWhereInput | undefined;
}
