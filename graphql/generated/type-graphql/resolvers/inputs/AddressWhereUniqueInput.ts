import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressWhereInput } from '../inputs/AddressWhereInput';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { PostListRelationFilter } from '../inputs/PostListRelationFilter';
import { StringFilter } from '../inputs/StringFilter';
import { StringNullableFilter } from '../inputs/StringNullableFilter';
import { UserAddressListRelationFilter } from '../inputs/UserAddressListRelationFilter';

@TypeGraphQL.InputType('AddressWhereUniqueInput', {})
export class AddressWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  code?: string | undefined;

  @TypeGraphQL.Field((_type) => [AddressWhereInput], {
    nullable: true,
  })
  AND?: AddressWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AddressWhereInput], {
    nullable: true,
  })
  OR?: AddressWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AddressWhereInput], {
    nullable: true,
  })
  NOT?: AddressWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  c1?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  c2?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  c3?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  c4?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => UserAddressListRelationFilter, {
    nullable: true,
  })
  users?: UserAddressListRelationFilter | undefined;
}
