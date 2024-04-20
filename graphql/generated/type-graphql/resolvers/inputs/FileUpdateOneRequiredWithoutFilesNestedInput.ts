import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileCreateOrConnectWithoutFilesInput } from '../inputs/FileCreateOrConnectWithoutFilesInput';
import { FileCreateWithoutFilesInput } from '../inputs/FileCreateWithoutFilesInput';
import { FileUpdateToOneWithWhereWithoutFilesInput } from '../inputs/FileUpdateToOneWithWhereWithoutFilesInput';
import { FileUpsertWithoutFilesInput } from '../inputs/FileUpsertWithoutFilesInput';
import { FileWhereUniqueInput } from '../inputs/FileWhereUniqueInput';

@TypeGraphQL.InputType('FileUpdateOneRequiredWithoutFilesNestedInput', {})
export class FileUpdateOneRequiredWithoutFilesNestedInput {
  @TypeGraphQL.Field((_type) => FileCreateWithoutFilesInput, {
    nullable: true,
  })
  create?: FileCreateWithoutFilesInput | undefined;

  @TypeGraphQL.Field((_type) => FileCreateOrConnectWithoutFilesInput, {
    nullable: true,
  })
  connectOrCreate?: FileCreateOrConnectWithoutFilesInput | undefined;

  @TypeGraphQL.Field((_type) => FileUpsertWithoutFilesInput, {
    nullable: true,
  })
  upsert?: FileUpsertWithoutFilesInput | undefined;

  @TypeGraphQL.Field((_type) => FileWhereUniqueInput, {
    nullable: true,
  })
  connect?: FileWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => FileUpdateToOneWithWhereWithoutFilesInput, {
    nullable: true,
  })
  update?: FileUpdateToOneWithWhereWithoutFilesInput | undefined;
}
