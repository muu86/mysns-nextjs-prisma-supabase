import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserCreateManyUserInput } from '../inputs/ChatUserCreateManyUserInput';

@TypeGraphQL.InputType('ChatUserCreateManyUserInputEnvelope', {})
export class ChatUserCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [ChatUserCreateManyUserInput], {
    nullable: false,
  })
  data!: ChatUserCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
