import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { FileUpdateOneRequiredWithoutFilesNestedInput } from '../inputs/FileUpdateOneRequiredWithoutFilesNestedInput';
import { UserUpdateOneRequiredWithoutFilesNestedInput } from '../inputs/UserUpdateOneRequiredWithoutFilesNestedInput';

@TypeGraphQL.InputType('UserFileUpdateInput', {})
export class UserFileUpdateInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => FileUpdateOneRequiredWithoutFilesNestedInput, {
    nullable: true,
  })
  file?: FileUpdateOneRequiredWithoutFilesNestedInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutFilesNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutFilesNestedInput | undefined;
}
