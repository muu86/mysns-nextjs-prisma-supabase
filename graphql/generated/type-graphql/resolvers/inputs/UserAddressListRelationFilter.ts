import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressWhereInput } from '../inputs/UserAddressWhereInput';

@TypeGraphQL.InputType('UserAddressListRelationFilter', {})
export class UserAddressListRelationFilter {
  @TypeGraphQL.Field((_type) => UserAddressWhereInput, {
    nullable: true,
  })
  every?: UserAddressWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserAddressWhereInput, {
    nullable: true,
  })
  some?: UserAddressWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserAddressWhereInput, {
    nullable: true,
  })
  none?: UserAddressWhereInput | undefined;
}
