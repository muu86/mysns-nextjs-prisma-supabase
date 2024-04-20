import * as TypeGraphQL from 'type-graphql';

export enum RelationLoadStrategy {
  query = 'query',
  join = 'join',
}
TypeGraphQL.registerEnumType(RelationLoadStrategy, {
  name: 'RelationLoadStrategy',
  description: undefined,
});
