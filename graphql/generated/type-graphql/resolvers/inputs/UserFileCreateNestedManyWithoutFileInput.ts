import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileCreateManyFileInputEnvelope } from '../inputs/UserFileCreateManyFileInputEnvelope';
import { UserFileCreateOrConnectWithoutFileInput } from '../inputs/UserFileCreateOrConnectWithoutFileInput';
import { UserFileCreateWithoutFileInput } from '../inputs/UserFileCreateWithoutFileInput';
import { UserFileWhereUniqueInput } from '../inputs/UserFileWhereUniqueInput';

@TypeGraphQL.InputType('UserFileCreateNestedManyWithoutFileInput', {})
export class UserFileCreateNestedManyWithoutFileInput {
  @TypeGraphQL.Field((_type) => [UserFileCreateWithoutFileInput], {
    nullable: true,
  })
  create?: UserFileCreateWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileCreateOrConnectWithoutFileInput], {
    nullable: true,
  })
  connectOrCreate?: UserFileCreateOrConnectWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => UserFileCreateManyFileInputEnvelope, {
    nullable: true,
  })
  createMany?: UserFileCreateManyFileInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [UserFileWhereUniqueInput], {
    nullable: true,
  })
  connect?: UserFileWhereUniqueInput[] | undefined;
}
