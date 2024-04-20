import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserFileWhereInput } from '../../inputs/UserFileWhereInput';

@TypeGraphQL.ArgsType()
export class FileCountFilesArgs {
  @TypeGraphQL.Field((_type) => UserFileWhereInput, {
    nullable: true,
  })
  where?: UserFileWhereInput | undefined;
}