import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserFileOrderByWithAggregationInput } from '../../../inputs/UserFileOrderByWithAggregationInput';
import { UserFileScalarWhereWithAggregatesInput } from '../../../inputs/UserFileScalarWhereWithAggregatesInput';
import { UserFileWhereInput } from '../../../inputs/UserFileWhereInput';
import { UserFileScalarFieldEnum } from '../../../../enums/UserFileScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class GroupByUserFileArgs {
  @TypeGraphQL.Field((_type) => UserFileWhereInput, {
    nullable: true,
  })
  where?: UserFileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [UserFileOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: UserFileOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<'id' | 'userId' | 'fileId' | 'createdAt' | 'updatedAt'>;

  @TypeGraphQL.Field((_type) => UserFileScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: UserFileScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
