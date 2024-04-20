import * as TypeGraphQL from 'type-graphql';

export enum Role {
  READ = 'READ',
  WRITE = 'WRITE',
}
TypeGraphQL.registerEnumType(Role, {
  name: 'Role',
  description: undefined,
});
