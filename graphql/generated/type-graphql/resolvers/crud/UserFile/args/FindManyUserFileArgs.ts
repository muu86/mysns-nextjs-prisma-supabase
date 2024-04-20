import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserFileOrderByWithRelationInput } from '../../../inputs/UserFileOrderByWithRelationInput';
import { UserFileWhereInput } from '../../../inputs/UserFileWhereInput';
import { UserFileWhereUniqueInput } from '../../../inputs/UserFileWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';
import { UserFileScalarFieldEnum } from '../../../../enums/UserFileScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class FindManyUserFileArgs {
  @TypeGraphQL.Field((_type) => UserFileWhereInput, {
    nullable: true,
  })
  where?: UserFileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [UserFileOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: UserFileOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => UserFileWhereUniqueInput, {
    nullable: true,
  })
  cursor?: UserFileWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [UserFileScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'id' | 'userId' | 'fileId' | 'createdAt' | 'updatedAt'> | undefined;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
