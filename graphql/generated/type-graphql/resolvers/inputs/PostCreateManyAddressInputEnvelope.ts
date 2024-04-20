import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostCreateManyAddressInput } from '../inputs/PostCreateManyAddressInput';

@TypeGraphQL.InputType('PostCreateManyAddressInputEnvelope', {})
export class PostCreateManyAddressInputEnvelope {
  @TypeGraphQL.Field((_type) => [PostCreateManyAddressInput], {
    nullable: false,
  })
  data!: PostCreateManyAddressInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
