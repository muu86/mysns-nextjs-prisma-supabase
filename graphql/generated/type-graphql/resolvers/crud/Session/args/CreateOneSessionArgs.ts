import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { SessionCreateInput } from '../../../inputs/SessionCreateInput';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class CreateOneSessionArgs {
  @TypeGraphQL.Field((_type) => SessionCreateInput, {
    nullable: false,
  })
  data!: SessionCreateInput;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
