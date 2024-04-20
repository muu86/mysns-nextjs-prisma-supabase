import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { SessionUpdateInput } from '../../../inputs/SessionUpdateInput';
import { SessionWhereUniqueInput } from '../../../inputs/SessionWhereUniqueInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class UpdateOneSessionArgs {
  @TypeGraphQL.Field((_type) => SessionUpdateInput, {
    nullable: false,
  })
  data!: SessionUpdateInput;

  @TypeGraphQL.Field((_type) => SessionWhereUniqueInput, {
    nullable: false,
  })
  where!: SessionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
