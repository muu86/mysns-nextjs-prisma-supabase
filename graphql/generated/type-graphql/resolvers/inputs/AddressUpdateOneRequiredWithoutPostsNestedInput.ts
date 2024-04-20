import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressUpdateToOneWithWhereWithoutPostsInput } from '../inputs/AddressUpdateToOneWithWhereWithoutPostsInput';
import { AddressWhereUniqueInput } from '../inputs/AddressWhereUniqueInput';

@TypeGraphQL.InputType('AddressUpdateOneRequiredWithoutPostsNestedInput', {})
export class AddressUpdateOneRequiredWithoutPostsNestedInput {
  @TypeGraphQL.Field((_type) => AddressWhereUniqueInput, {
    nullable: true,
  })
  connect?: AddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => AddressUpdateToOneWithWhereWithoutPostsInput, {
    nullable: true,
  })
  update?: AddressUpdateToOneWithWhereWithoutPostsInput | undefined;
}
