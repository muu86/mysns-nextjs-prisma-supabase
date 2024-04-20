import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { AddressOrderByWithRelationInput } from '../../../inputs/AddressOrderByWithRelationInput';
import { AddressWhereInput } from '../../../inputs/AddressWhereInput';
import { AddressWhereUniqueInput } from '../../../inputs/AddressWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class AggregateAddressArgs {
  @TypeGraphQL.Field((_type) => AddressWhereInput, {
    nullable: true,
  })
  where?: AddressWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [AddressOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: AddressOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => AddressWhereUniqueInput, {
    nullable: true,
  })
  cursor?: AddressWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
