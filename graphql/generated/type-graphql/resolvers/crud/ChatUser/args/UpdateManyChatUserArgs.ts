import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChatUserUpdateManyMutationInput } from '../../../inputs/ChatUserUpdateManyMutationInput';
import { ChatUserWhereInput } from '../../../inputs/ChatUserWhereInput';

@TypeGraphQL.ArgsType()
export class UpdateManyChatUserArgs {
  @TypeGraphQL.Field((_type) => ChatUserUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ChatUserUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => ChatUserWhereInput, {
    nullable: true,
  })
  where?: ChatUserWhereInput | undefined;
}
