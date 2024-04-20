import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { UserAddressOrderByWithRelationInput } from '../../../inputs/UserAddressOrderByWithRelationInput';
import { UserAddressWhereInput } from '../../../inputs/UserAddressWhereInput';
import { UserAddressWhereUniqueInput } from '../../../inputs/UserAddressWhereUniqueInput';
import { UserAddressScalarFieldEnum } from '../../../../enums/UserAddressScalarFieldEnum';

@TypeGraphQL.ArgsType()
export class UserAddressesArgs {
  @TypeGraphQL.Field((_type) => UserAddressWhereInput, {
    nullable: true,
  })
  where?: UserAddressWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: UserAddressOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => UserAddressWhereUniqueInput, {
    nullable: true,
  })
  cursor?: UserAddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'id' | 'userId' | 'addressId' | 'createdAt' | 'updatedAt'> | undefined;
}
