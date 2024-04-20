import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressUpdateWithoutPostsInput } from '../inputs/AddressUpdateWithoutPostsInput';
import { AddressWhereInput } from '../inputs/AddressWhereInput';

@TypeGraphQL.InputType('AddressUpdateToOneWithWhereWithoutPostsInput', {})
export class AddressUpdateToOneWithWhereWithoutPostsInput {
  @TypeGraphQL.Field((_type) => AddressWhereInput, {
    nullable: true,
  })
  where?: AddressWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AddressUpdateWithoutPostsInput, {
    nullable: false,
  })
  data!: AddressUpdateWithoutPostsInput;
}
