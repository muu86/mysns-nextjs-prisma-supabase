import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatWhereInput } from '../inputs/ChatWhereInput';

@TypeGraphQL.InputType('ChatRelationFilter', {})
export class ChatRelationFilter {
  @TypeGraphQL.Field((_type) => ChatWhereInput, {
    nullable: true,
  })
  is?: ChatWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ChatWhereInput, {
    nullable: true,
  })
  isNot?: ChatWhereInput | undefined;
}
