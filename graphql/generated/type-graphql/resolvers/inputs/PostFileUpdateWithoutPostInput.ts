import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { FileUpdateOneRequiredWithoutPostsNestedInput } from '../inputs/FileUpdateOneRequiredWithoutPostsNestedInput';

@TypeGraphQL.InputType('PostFileUpdateWithoutPostInput', {})
export class PostFileUpdateWithoutPostInput {
  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => FileUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true,
  })
  file?: FileUpdateOneRequiredWithoutPostsNestedInput | undefined;
}
