import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileUpdateWithoutFileInput } from '../inputs/UserFileUpdateWithoutFileInput';
import { UserFileWhereUniqueInput } from '../inputs/UserFileWhereUniqueInput';

@TypeGraphQL.InputType('UserFileUpdateWithWhereUniqueWithoutFileInput', {})
export class UserFileUpdateWithWhereUniqueWithoutFileInput {
  @TypeGraphQL.Field((_type) => UserFileWhereUniqueInput, {
    nullable: false,
  })
  where!: UserFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserFileUpdateWithoutFileInput, {
    nullable: false,
  })
  data!: UserFileUpdateWithoutFileInput;
}
