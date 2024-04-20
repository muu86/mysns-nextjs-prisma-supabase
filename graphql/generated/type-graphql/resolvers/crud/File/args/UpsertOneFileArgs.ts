import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { FileCreateInput } from '../../../inputs/FileCreateInput';
import { FileUpdateInput } from '../../../inputs/FileUpdateInput';
import { FileWhereUniqueInput } from '../../../inputs/FileWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpsertOneFileArgs {
  @TypeGraphQL.Field((_type) => FileWhereUniqueInput, {
    nullable: false,
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => FileCreateInput, {
    nullable: false,
  })
  create!: FileCreateInput;

  @TypeGraphQL.Field((_type) => FileUpdateInput, {
    nullable: false,
  })
  update!: FileUpdateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
