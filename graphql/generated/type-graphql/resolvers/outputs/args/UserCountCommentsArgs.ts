import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CommentWhereInput } from '../../inputs/CommentWhereInput';

@TypeGraphQL.ArgsType()
export class UserCountCommentsArgs {
  @TypeGraphQL.Field((_type) => CommentWhereInput, {
    nullable: true,
  })
  where?: CommentWhereInput | undefined;
}
