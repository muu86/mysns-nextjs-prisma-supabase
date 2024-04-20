import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserFileUpdateInput } from '../../../inputs/UserFileUpdateInput';
import { UserFileWhereUniqueInput } from '../../../inputs/UserFileWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOneUserFileArgs {
  @TypeGraphQL.Field((_type) => UserFileUpdateInput, {
    nullable: false,
  })
  data!: UserFileUpdateInput;

  @TypeGraphQL.Field((_type) => UserFileWhereUniqueInput, {
    nullable: false,
  })
  where!: UserFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
