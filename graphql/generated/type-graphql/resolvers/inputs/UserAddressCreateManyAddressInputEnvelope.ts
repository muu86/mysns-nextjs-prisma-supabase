import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressCreateManyAddressInput } from '../inputs/UserAddressCreateManyAddressInput';

@TypeGraphQL.InputType('UserAddressCreateManyAddressInputEnvelope', {})
export class UserAddressCreateManyAddressInputEnvelope {
  @TypeGraphQL.Field((_type) => [UserAddressCreateManyAddressInput], {
    nullable: false,
  })
  data!: UserAddressCreateManyAddressInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
