import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AccountCreateNestedManyWithoutUserInput } from '../inputs/AccountCreateNestedManyWithoutUserInput';
import { ChatMessageCreateNestedManyWithoutUserInput } from '../inputs/ChatMessageCreateNestedManyWithoutUserInput';
import { ChatUserCreateNestedManyWithoutUserInput } from '../inputs/ChatUserCreateNestedManyWithoutUserInput';
import { CommentCreateNestedManyWithoutUserInput } from '../inputs/CommentCreateNestedManyWithoutUserInput';
import { PostCreateNestedManyWithoutUserInput } from '../inputs/PostCreateNestedManyWithoutUserInput';
import { SessionCreateNestedManyWithoutUserInput } from '../inputs/SessionCreateNestedManyWithoutUserInput';
import { UserAddressCreateNestedManyWithoutUserInput } from '../inputs/UserAddressCreateNestedManyWithoutUserInput';
import { Role } from '../../enums/Role';

@TypeGraphQL.InputType('UserCreateWithoutFilesInput', {})
export class UserCreateWithoutFilesInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  content?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  babyBirth?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  emailVerified?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  image?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  username?: string | undefined;

  @TypeGraphQL.Field((_type) => Role, {
    nullable: true,
  })
  role?: 'READ' | 'WRITE' | undefined;

  @TypeGraphQL.Field((_type) => AccountCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: AccountCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUserCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  chats?: ChatUserCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => CommentCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  posts?: PostCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => SessionCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  sessions?: SessionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => UserAddressCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  addresses?: UserAddressCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ChatMessageCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  chatMessages?: ChatMessageCreateNestedManyWithoutUserInput | undefined;
}
