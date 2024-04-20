import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserFileUpdateManyMutationInput } from '../../../inputs/UserFileUpdateManyMutationInput';
import { UserFileWhereInput } from '../../../inputs/UserFileWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyUserFileArgs {
  @TypeGraphQL.Field((_type) => UserFileUpdateManyMutationInput, {
    nullable: false,
  })
  data!: UserFileUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => UserFileWhereInput, {
    nullable: true,
  })
  where?: UserFileWhereInput | undefined;
}
