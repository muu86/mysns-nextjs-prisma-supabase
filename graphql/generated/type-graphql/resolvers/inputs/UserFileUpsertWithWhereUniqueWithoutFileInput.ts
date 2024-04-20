import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileCreateWithoutFileInput } from '../inputs/UserFileCreateWithoutFileInput';
import { UserFileUpdateWithoutFileInput } from '../inputs/UserFileUpdateWithoutFileInput';
import { UserFileWhereUniqueInput } from '../inputs/UserFileWhereUniqueInput';

@TypeGraphQL.InputType('UserFileUpsertWithWhereUniqueWithoutFileInput', {})
export class UserFileUpsertWithWhereUniqueWithoutFileInput {
  @TypeGraphQL.Field((_type) => UserFileWhereUniqueInput, {
    nullable: false,
  })
  where!: UserFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserFileUpdateWithoutFileInput, {
    nullable: false,
  })
  update!: UserFileUpdateWithoutFileInput;

  @TypeGraphQL.Field((_type) => UserFileCreateWithoutFileInput, {
    nullable: false,
  })
  create!: UserFileCreateWithoutFileInput;
}
