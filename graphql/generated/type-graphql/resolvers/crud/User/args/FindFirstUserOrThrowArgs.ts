import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserOrderByWithRelationInput } from '../../../inputs/UserOrderByWithRelationInput';
import { UserWhereInput } from '../../../inputs/UserWhereInput';
import { UserWhereUniqueInput } from '../../../inputs/UserWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';
import { UserScalarFieldEnum } from '../../../../enums/UserScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class FindFirstUserOrThrowArgs {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [UserOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: UserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  cursor?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [UserScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | 'id'
        | 'content'
        | 'babyBirth'
        | 'createdAt'
        | 'updatedAt'
        | 'email'
        | 'emailVerified'
        | 'image'
        | 'name'
        | 'username'
        | 'role'
      >
    | undefined;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
