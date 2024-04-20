import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileCreateManyFileInput } from '../inputs/UserFileCreateManyFileInput';

@TypeGraphQL.InputType('UserFileCreateManyFileInputEnvelope', {})
export class UserFileCreateManyFileInputEnvelope {
  @TypeGraphQL.Field((_type) => [UserFileCreateManyFileInput], {
    nullable: false,
  })
  data!: UserFileCreateManyFileInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
