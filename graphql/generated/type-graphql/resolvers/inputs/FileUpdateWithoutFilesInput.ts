import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { EnumFileStorageTypeFieldUpdateOperationsInput } from '../inputs/EnumFileStorageTypeFieldUpdateOperationsInput';
import { PostFileUpdateManyWithoutFileNestedInput } from '../inputs/PostFileUpdateManyWithoutFileNestedInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';

@TypeGraphQL.InputType('FileUpdateWithoutFilesInput', {})
export class FileUpdateWithoutFilesInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  location?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => EnumFileStorageTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  type?: EnumFileStorageTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => PostFileUpdateManyWithoutFileNestedInput, {
    nullable: true,
  })
  posts?: PostFileUpdateManyWithoutFileNestedInput | undefined;
}
