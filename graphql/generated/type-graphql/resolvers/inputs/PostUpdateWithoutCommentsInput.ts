import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressUpdateOneRequiredWithoutPostsNestedInput } from '../inputs/AddressUpdateOneRequiredWithoutPostsNestedInput';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { PostFileUpdateManyWithoutPostNestedInput } from '../inputs/PostFileUpdateManyWithoutPostNestedInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';
import { UserUpdateOneRequiredWithoutPostsNestedInput } from '../inputs/UserUpdateOneRequiredWithoutPostsNestedInput';

@TypeGraphQL.InputType('PostUpdateWithoutCommentsInput', {})
export class PostUpdateWithoutCommentsInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  content?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => PostFileUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  files?: PostFileUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => AddressUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true,
  })
  address?: AddressUpdateOneRequiredWithoutPostsNestedInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutPostsNestedInput | undefined;
}
