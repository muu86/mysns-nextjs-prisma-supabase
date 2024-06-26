import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChatUserWhereInput } from '../../../inputs/ChatUserWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyChatUserArgs {
  @TypeGraphQL.Field((_type) => ChatUserWhereInput, {
    nullable: true,
  })
  where?: ChatUserWhereInput | undefined;
}
