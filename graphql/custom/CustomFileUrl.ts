import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class CustomFileUrl {
  @Field({ nullable: true })
  raw: string;

  @Field({ nullable: true })
  lg: string;

  @Field({ nullable: true })
  md: string;

  @Field({ nullable: true })
  sm: string;
}
