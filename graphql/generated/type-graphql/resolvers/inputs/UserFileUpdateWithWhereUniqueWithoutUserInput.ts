import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileUpdateWithoutUserInput } from '../inputs/UserFileUpdateWithoutUserInput';
import { UserFileWhereUniqueInput } from '../inputs/UserFileWhereUniqueInput';

@TypeGraphQL.InputType('UserFileUpdateWithWhereUniqueWithoutUserInput', {})
export class UserFileUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => UserFileWhereUniqueInput, {
    nullable: false,
  })
  where!: UserFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserFileUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: UserFileUpdateWithoutUserInput;
}
