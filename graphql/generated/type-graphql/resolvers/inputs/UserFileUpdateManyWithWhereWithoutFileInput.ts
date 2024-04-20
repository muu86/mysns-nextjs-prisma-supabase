import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileScalarWhereInput } from '../inputs/UserFileScalarWhereInput';
import { UserFileUpdateManyMutationInput } from '../inputs/UserFileUpdateManyMutationInput';

@TypeGraphQL.InputType('UserFileUpdateManyWithWhereWithoutFileInput', {})
export class UserFileUpdateManyWithWhereWithoutFileInput {
  @TypeGraphQL.Field((_type) => UserFileScalarWhereInput, {
    nullable: false,
  })
  where!: UserFileScalarWhereInput;

  @TypeGraphQL.Field((_type) => UserFileUpdateManyMutationInput, {
    nullable: false,
  })
  data!: UserFileUpdateManyMutationInput;
}
