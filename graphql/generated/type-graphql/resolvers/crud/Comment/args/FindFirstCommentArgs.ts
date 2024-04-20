import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { CommentOrderByWithRelationInput } from '../../../inputs/CommentOrderByWithRelationInput';
import { CommentWhereInput } from '../../../inputs/CommentWhereInput';
import { CommentWhereUniqueInput } from '../../../inputs/CommentWhereUniqueInput';
import { CommentScalarFieldEnum } from '../../../../enums/CommentScalarFieldEnum';
import { RelationLoadStrategy } from '../../../../enums/RelationLoadStrategy';

@TypeGraphQL.ArgsType()
export class FindFirstCommentArgs {
  @TypeGraphQL.Field((_type) => CommentWhereInput, {
    nullable: true,
  })
  where?: CommentWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [CommentOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: CommentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => CommentWhereUniqueInput, {
    nullable: true,
  })
  cursor?: CommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [CommentScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'id' | 'content' | 'createdAt' | 'updatedAt' | 'userId' | 'postId'> | undefined;

  @TypeGraphQL.Field((_type) => RelationLoadStrategy, {
    nullable: true,
  })
  relationLoadStrategy?: 'query' | 'join' | undefined;
}
