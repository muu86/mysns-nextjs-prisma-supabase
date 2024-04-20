import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileCreateOrConnectWithoutPostsInput } from '../inputs/FileCreateOrConnectWithoutPostsInput';
import { FileCreateWithoutPostsInput } from '../inputs/FileCreateWithoutPostsInput';
import { FileUpdateToOneWithWhereWithoutPostsInput } from '../inputs/FileUpdateToOneWithWhereWithoutPostsInput';
import { FileUpsertWithoutPostsInput } from '../inputs/FileUpsertWithoutPostsInput';
import { FileWhereUniqueInput } from '../inputs/FileWhereUniqueInput';

@TypeGraphQL.InputType('FileUpdateOneRequiredWithoutPostsNestedInput', {})
export class FileUpdateOneRequiredWithoutPostsNestedInput {
  @TypeGraphQL.Field((_type) => FileCreateWithoutPostsInput, {
    nullable: true,
  })
  create?: FileCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field((_type) => FileCreateOrConnectWithoutPostsInput, {
    nullable: true,
  })
  connectOrCreate?: FileCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field((_type) => FileUpsertWithoutPostsInput, {
    nullable: true,
  })
  upsert?: FileUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field((_type) => FileWhereUniqueInput, {
    nullable: true,
  })
  connect?: FileWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => FileUpdateToOneWithWhereWithoutPostsInput, {
    nullable: true,
  })
  update?: FileUpdateToOneWithWhereWithoutPostsInput | undefined;
}
