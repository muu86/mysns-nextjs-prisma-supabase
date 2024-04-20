import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CommentUpdateManyWithoutPostNestedInput } from '../inputs/CommentUpdateManyWithoutPostNestedInput';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { PostFileUpdateManyWithoutPostNestedInput } from '../inputs/PostFileUpdateManyWithoutPostNestedInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';
import { UserUpdateOneRequiredWithoutPostsNestedInput } from '../inputs/UserUpdateOneRequiredWithoutPostsNestedInput';

@TypeGraphQL.InputType('PostUpdateWithoutAddressInput', {})
export class PostUpdateWithoutAddressInput {
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

  @TypeGraphQL.Field((_type) => CommentUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => PostFileUpdateManyWithoutPostNestedInput, {
    nullable: true,
  })
  files?: PostFileUpdateManyWithoutPostNestedInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutPostsNestedInput | undefined;
}
