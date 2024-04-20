import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserUpdateWithoutChatsInput } from '../inputs/UserUpdateWithoutChatsInput';
import { UserWhereInput } from '../inputs/UserWhereInput';

@TypeGraphQL.InputType('UserUpdateToOneWithWhereWithoutChatsInput', {})
export class UserUpdateToOneWithWhereWithoutChatsInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutChatsInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutChatsInput;
}
