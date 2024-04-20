import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserAddressWhereInput } from '../../inputs/UserAddressWhereInput';

@TypeGraphQL.ArgsType()
export class UserCountAddressesArgs {
  @TypeGraphQL.Field((_type) => UserAddressWhereInput, {
    nullable: true,
  })
  where?: UserAddressWhereInput | undefined;
}
