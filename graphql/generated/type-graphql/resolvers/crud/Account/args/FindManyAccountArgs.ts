import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AccountOrderByWithRelationInput } from '../../../inputs/AccountOrderByWithRelationInput';
import { AccountWhereInput } from '../../../inputs/AccountWhereInput';
import { AccountWhereUniqueInput } from '../../../inputs/AccountWhereUniqueInput';
import { AccountScalarFieldEnum } from '../../../../enums/AccountScalarFieldEnum';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class FindManyAccountArgs {
  @TypeGraphQL.Field((_type) => AccountWhereInput, {
    nullable: true,
  })
  where?: AccountWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [AccountOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: AccountOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, {
    nullable: true,
  })
  cursor?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [AccountScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | 'type'
        | 'provider'
        | 'providerAccountId'
        | 'refresh_token'
        | 'access_token'
        | 'expires_at'
        | 'token_type'
        | 'scope'
        | 'id_token'
        | 'session_state'
        | 'createdAt'
        | 'updatedAt'
        | 'userId'
      >
    | undefined;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
