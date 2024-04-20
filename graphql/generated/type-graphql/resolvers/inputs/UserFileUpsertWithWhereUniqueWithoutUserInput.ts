import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileCreateWithoutUserInput } from '../inputs/UserFileCreateWithoutUserInput';
import { UserFileUpdateWithoutUserInput } from '../inputs/UserFileUpdateWithoutUserInput';
import { UserFileWhereUniqueInput } from '../inputs/UserFileWhereUniqueInput';

@TypeGraphQL.InputType('UserFileUpsertWithWhereUniqueWithoutUserInput', {})
export class UserFileUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => UserFileWhereUniqueInput, {
    nullable: false,
  })
  where!: UserFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserFileUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: UserFileUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => UserFileCreateWithoutUserInput, {
    nullable: false,
  })
  create!: UserFileCreateWithoutUserInput;
}
