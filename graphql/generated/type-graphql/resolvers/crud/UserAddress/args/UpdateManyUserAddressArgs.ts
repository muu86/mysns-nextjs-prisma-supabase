import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserAddressUpdateManyMutationInput } from '../../../inputs/UserAddressUpdateManyMutationInput';
import { UserAddressWhereInput } from '../../../inputs/UserAddressWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyUserAddressArgs {
  @TypeGraphQL.Field((_type) => UserAddressUpdateManyMutationInput, {
    nullable: false,
  })
  data!: UserAddressUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => UserAddressWhereInput, {
    nullable: true,
  })
  where?: UserAddressWhereInput | undefined;
}
