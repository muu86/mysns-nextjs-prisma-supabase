import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileWhereInput } from '../inputs/UserFileWhereInput';

@TypeGraphQL.InputType('UserFileListRelationFilter', {})
export class UserFileListRelationFilter {
  @TypeGraphQL.Field((_type) => UserFileWhereInput, {
    nullable: true,
  })
  every?: UserFileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserFileWhereInput, {
    nullable: true,
  })
  some?: UserFileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserFileWhereInput, {
    nullable: true,
  })
  none?: UserFileWhereInput | undefined;
}
