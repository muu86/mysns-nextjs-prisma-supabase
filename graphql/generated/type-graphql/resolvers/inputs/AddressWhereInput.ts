import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { PostListRelationFilter } from '../inputs/PostListRelationFilter';
import { StringFilter } from '../inputs/StringFilter';
import { StringNullableFilter } from '../inputs/StringNullableFilter';
import { UserAddressListRelationFilter } from '../inputs/UserAddressListRelationFilter';

@TypeGraphQL.InputType('AddressWhereInput', {})
export class AddressWhereInput {
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

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  code?: StringFilter | undefined;

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
