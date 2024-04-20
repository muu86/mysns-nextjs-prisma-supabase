import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserFileCreateManyInput } from '../../../inputs/UserFileCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyUserFileArgs {
  @TypeGraphQL.Field((_type) => [UserFileCreateManyInput], {
    nullable: false,
  })
  data!: UserFileCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
