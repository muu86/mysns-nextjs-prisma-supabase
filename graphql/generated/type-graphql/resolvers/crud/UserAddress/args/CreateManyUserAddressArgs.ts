import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserAddressCreateManyInput } from '../../../inputs/UserAddressCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyUserAddressArgs {
  @TypeGraphQL.Field((_type) => [UserAddressCreateManyInput], {
    nullable: false,
  })
  data!: UserAddressCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
