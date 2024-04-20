import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostCreateOrConnectWithoutFilesInput } from '../inputs/PostCreateOrConnectWithoutFilesInput';
import { PostCreateWithoutFilesInput } from '../inputs/PostCreateWithoutFilesInput';
import { PostUpdateToOneWithWhereWithoutFilesInput } from '../inputs/PostUpdateToOneWithWhereWithoutFilesInput';
import { PostUpsertWithoutFilesInput } from '../inputs/PostUpsertWithoutFilesInput';
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput';

@TypeGraphQL.InputType('PostUpdateOneRequiredWithoutFilesNestedInput', {})
export class PostUpdateOneRequiredWithoutFilesNestedInput {
  @TypeGraphQL.Field((_type) => PostCreateWithoutFilesInput, {
    nullable: true,
  })
  create?: PostCreateWithoutFilesInput | undefined;

  @TypeGraphQL.Field((_type) => PostCreateOrConnectWithoutFilesInput, {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutFilesInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpsertWithoutFilesInput, {
    nullable: true,
  })
  upsert?: PostUpsertWithoutFilesInput | undefined;

  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: true,
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => PostUpdateToOneWithWhereWithoutFilesInput, {
    nullable: true,
  })
  update?: PostUpdateToOneWithWhereWithoutFilesInput | undefined;
}
