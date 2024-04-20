import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressRelationFilter } from '../inputs/AddressRelationFilter';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { UserRelationFilter } from '../inputs/UserRelationFilter';

@TypeGraphQL.InputType('UserAddressWhereInput', {})
export class UserAddressWhereInput {
  @TypeGraphQL.Field((_type) => [UserAddressWhereInput], {
    nullable: true,
  })
  AND?: UserAddressWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressWhereInput], {
    nullable: true,
  })
  OR?: UserAddressWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressWhereInput], {
    nullable: true,
  })
  NOT?: UserAddressWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  addressId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => AddressRelationFilter, {
    nullable: true,
  })
  address?: AddressRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;
}
