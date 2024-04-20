import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { ChatUserCreateManyInput } from '../../../inputs/ChatUserCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyChatUserArgs {
  @TypeGraphQL.Field((_type) => [ChatUserCreateManyInput], {
    nullable: false,
  })
  data!: ChatUserCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
