import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserAddressOrderByWithAggregationInput } from '../../../inputs/UserAddressOrderByWithAggregationInput';
import { UserAddressScalarWhereWithAggregatesInput } from '../../../inputs/UserAddressScalarWhereWithAggregatesInput';
import { UserAddressWhereInput } from '../../../inputs/UserAddressWhereInput';
import { UserAddressScalarFieldEnum } from '../../../../enums/UserAddressScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class GroupByUserAddressArgs {
  @TypeGraphQL.Field((_type) => UserAddressWhereInput, {
    nullable: true,
  })
  where?: UserAddressWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: UserAddressOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<'id' | 'userId' | 'addressId' | 'createdAt' | 'updatedAt'>;

  @TypeGraphQL.Field((_type) => UserAddressScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: UserAddressScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
