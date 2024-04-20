import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { UserUpdateOneRequiredWithoutFilesNestedInput } from '../inputs/UserUpdateOneRequiredWithoutFilesNestedInput';

@TypeGraphQL.InputType('UserFileUpdateWithoutFileInput', {})
export class UserFileUpdateWithoutFileInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutFilesNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutFilesNestedInput | undefined;
}
