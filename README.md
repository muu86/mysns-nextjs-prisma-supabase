# MySNS

- prisma: 스프링은 서버리스와 어울리지 않아서 상시 서버를 가동해야하기 때문에 nextjs 만으로 앱을 구동하기 위해서 prisma를 사용했습니다.
- graphql: prisma 와 잘 어울리는 것 같아서 사용해봤습니다. 경험해보니 혼자서 개발하기에 `rest` 보다 `graphql`이 편한 것 같습니다. rest api 로 개발하려면 백엔드 서버에서 api 명세를 정하고 프론트는 그 명세에 따라서 요청 응답을 정의하고 타입까지 신경을 써줘야합니다. qraphql 은 명세를 한번 정해놓으면 클라이언트에서 선택적으로 정보를 가져올 수 있는 것이 장점입니다.
  
혼자 개발하기에는 스프링과 프론트를 분리해서 개발하는 것보다 `nextjs`만으로 개발하는게 편할 것 같아서 `prisma` 를 사용해봤습니다. vercel에 배포할 때도 prisma 버전으로 배포했습니다. 
  

## Prisma

Javascript의 ORM 프레임워크입니다.

데이버베이스를 `supabase`를 사용해볼 생각이었는데 `prisma`와 `supabase`가 잘 호환되지 않고 차라리 supabase 가 제공하는 client를 사용하는 것이 낫다는 글들을 봤습니다. 정확한 정보는 다시 확인해봐야겠습니다.


### 단점

- 복잡한 쿼리에는 한계가 있는 거 같습니다. 서브 쿼리 불가.
- Postgres 확장기능을 사용할 수 없습니다. 확장기능을 사용하려면 Raw Query 로 작성해야 합니다.  PostGIS 의 Geometry 타입도 정의할 수 없습니다.

```
model Address {
  id   Int     @id @default(autoincrement())
  geoP    Unsupported("geometry(Geometry, 5179)") @map("geo_p")
  geoS    Unsupported("geometry(Geometry, 4326)") @map("geo_s")
  centerP Unsupported("geometry(Point, 5179)")    @map("center_p")
  centerS Unsupported("geometry(Point, 4326)")    @map("center_s")
}

```
다음과 같이 Unsupported 으로 타입을 정의해야 합니다. Geometry 타입을 코드로 생성하고 쿼리에 삽입하는 게 불가능하기 때문에 DB의 네이티브 함수(`st_geomfromwkt` 등)를 사용해서 Geometry 타입을 생성해야 합니다. 

```ts
// csv 파일에서 주소 정보를 가져오고 디비에 저장
async function main() {
  const content = await fs.readFile('../data/seoul_emd_geometry.csv');
  // /..
    const result: number = await prisma.$executeRawUnsafe(`
        INSERT INTO addresses (code, c1, c2, c3, c4, created_at, updated_at, geo_p, geo_s, center_p, center_s)
        VALUES ('${record[1]}', '${c1}', '${c2}', '${c3}', '${c4}', now(), now(),
        st_geomfromewkt('${record[12]}'), st_geomfromewkt('${record[13]}'), st_centroid(st_geomfromewkt('${record[12]}')), st_centroid(st_geogfromtext('${record[13]}'), true)::geometry)
    `);
}
```


### 장점

- GraphQL 과 통합하기가 좋습니다. TypeGraphQL 이라는 라이브러리의 도움을 받으면 더 편합니다.

### 커넥션 풀

- Prisma Accelerate: Prisma 에서 제공하는 커넥션풀, 캐쉬 기능
- PgBouncer: Postgres 에서 제공하는 커넥션풀 기능, supabase에서 사용

저는 supabase를 사용하기 때문에 supabase가 기본으로 제공하는 pgBouncer를 사용했습니다.

### 서버리스에서 prisma, connection pool 사용 시 주의사항

https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections#serverless-environments-faas

nextjs 를 vercel 에 배포하면 서버리스 환경에서 구동되기 때문에 주의해야 할 것 같습니다. 

pgBouncer 설정에서 `connection_limit` 옵션을 `1`로 설정하고 필요에 따라 차근차근 늘려가라고 권장하고 있습니다. 왜냐하면 서버리스 환경에서는 생성되는 람다 컨테이너 마다 각각의 Prisma Client 인스턴스가 만들어지기 때문입니다. connection_limit 을 3으로 설정하고 람다 환경이 3개가 만들어지면 하나의 db로  3 * 3 = 9개의 connection 이 만들어 질 수가 있습니다.


### prisma 와 supabase 를 사용할 때 extensions 충돌 문제

https://github.com/prisma/prisma/issues/19100

supabase 에서 기본으로 설치하고 관리하는 extensions 들이 있는데 prisma 에서도 `extensions`를 사용할 때 둘이 충돌하는 문제가 있습니다. `prisma migrate` 명령 마다 스키마가 일치하지 
않으니 매번 `reset` 을 하게 됩니다.

```sql
-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "graphql";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "pgsodium";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "vault";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";
```

supabase 에서 사용하는 extensions 을 스키마도 같이 맞춰서 직접 prisma 에도 반영해주어야 합니다. 

```
datasource db {
  provider   = "postgresql"
  url        = env("DATABASE_URL")
  directUrl  = env("DIRECT_URL")
  extensions = [pg_graphql(schema: "graphql"), postgis(version: "3.3.2", schema: "public"), pgsodium(schema: "pgsodium"), supabase_vault(schema: "vault")]
  schemas    = ["public", "graphql"]
}
```


## GraphQL

### 라이브러리
- Yoga
- Apollo-Client
- TypeGraphQL
- GraphQL Codegen


### TypeGraphQL
https://typegraphql.com/docs/getting-started.html

Spring 과 비슷하게 어노테이션 기반으로 GraphQL 스키마를 정의합니다. 

다음과 같이 resolver에 서비스 계층을 주입할 수도 있습니다. 처음엔 `pothos`를 사용해서 스키마를 생성했는데, 스프링과 비슷한 이런 기능들이 좋아보여서 `type-grapqhl` 로 변경했습니다.
```ts
import { Service } from "typedi";

@Service()
@Resolver(of => Recipe)
export class RecipeResolver {
  constructor(
    // Dependency injection
    private readonly recipeService: RecipeService,
  ) {}

  @Query(returns => Recipe, { nullable: true })
  async recipe(@Arg("recipeId") recipeId: string) {
    // Usage of the injected service
    return this.recipeService.getOne(recipeId);
  }
}
```

### TypeGraphQL, Prisma 통합

`typegraphql-prisma` 라이브러리가 prisma와 통합을 제공합니다. prisma 에서 엔티티만 정의하면 자동으로 GraphQL 스키마를 생성해줍니다. 결국, TypeGraphQL로 직접 스키마를 작성할 필요가 없습니다. `schema.prisma` 에서 엔티티를 정의하고 플러그인 설정만 해주면 끝입니다.

내가 작성한 prisma 엔티티 
```
model User {
  id        Int       @id @default(autoincrement())
  name      String?
  username  String?
  content   String?
  babyBirth DateTime? @map("baby_birth") @db.Timestamptz()

  email         String    @unique
  emailVerified DateTime? @map("email_verified") @db.Timestamptz()
  image         String?

  role Role @default(READ)

  createdAt DateTime @default(now()) @map("created_at") @db.Timestamptz()
  updatedAt DateTime @updatedAt @map("updated_at") @db.Timestamptz()

  addresses UserAddress[]
  files     UserFile[]
  Account   Account[]
  Session   Session[]
  Post      Post[]
  Comment   Comment[]

  @@map("users")
}
```
자동 생성된 User Schema
```graphql
type User {
  Account(cursor: AccountWhereUniqueInput, distinct: [AccountScalarFieldEnum!], orderBy: [AccountOrderByWithRelationInput!], skip: Int, take: Int, where: AccountWhereInput): [Account!]!
  Comment(cursor: CommentWhereUniqueInput, distinct: [CommentScalarFieldEnum!], orderBy: [CommentOrderByWithRelationInput!], skip: Int, take: Int, where: CommentWhereInput): [Comment!]!
  Post(cursor: PostWhereUniqueInput, distinct: [PostScalarFieldEnum!], orderBy: [PostOrderByWithRelationInput!], skip: Int, take: Int, where: PostWhereInput): [Post!]!
  Session(cursor: SessionWhereUniqueInput, distinct: [SessionScalarFieldEnum!], orderBy: [SessionOrderByWithRelationInput!], skip: Int, take: Int, where: SessionWhereInput): [Session!]!
  _count: UserCount
  addresses(cursor: UserAddressWhereUniqueInput, distinct: [UserAddressScalarFieldEnum!], orderBy: [UserAddressOrderByWithRelationInput!], skip: Int, take: Int, where: UserAddressWhereInput): [UserAddress!]!
  babyBirth: DateTimeISO
  content: String
  createdAt: DateTimeISO!
  email: String!
  emailVerified: DateTimeISO
  files(cursor: UserFileWhereUniqueInput, distinct: [UserFileScalarFieldEnum!], orderBy: [UserFileOrderByWithRelationInput!], skip: Int, take: Int, where: UserFileWhereInput): [UserFile!]!
  id: ID!
  image: String
  name: String
  role: Role!
  updatedAt: DateTimeISO!
  username: String
}
```


### GraphQL Codegen

https://the-guild.dev/graphql/codegen

스키마에서 클라이언트 코드에서 사용할 타입을 생성해줍니다. rest 에 비교하자면 요청 바디나 파라미터의 타입과 응답 바디의 타입을 자동으로 생성해주는 것입니다.
혼자 개발할 때 api 를 수정하면 프론트 코드도 같이 변경해 줘야하는 귀찮은 작업들을 플러그인이 자동으로 처리해줍니다.

자동 생성된 쿼리 매개변수 타입
```ts
export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};
```

```ts
export const QueryComments = graphql(`
  query comments($where: CommentWhereInput, $orderBy: [CommentOrderByWithRelationInput!]) {
    comments(where: $where, orderBy: $orderBy) {
      id
      content
      user {
        id
        username
        files {
          file {
            location
          }
        }
      }
      updatedAt
    }
  }
`);
```
댓글을 조회하는 클라이언트 측 코드입니다. codegen 을 사용하지 않는다면 `QueryComments` 타입을 직접 작성해야 합니다. 그런데 codegen은 템플릿에서 제가 조회한 필드들에 맞게 자동으로 리턴 타입을 생성해줍니다.
```ts
const QueryComments: TypedDocumentNode<CommentsQuery, Exact<{
    where?: InputMaybe<CommentWhereInput> | undefined;
    orderBy?: InputMaybe<CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]> | undefined;
}>>
```

### typegraphql 이 entity 에서 schema 생성 -> codegen 이 schema에서 타입을 생성

저는 prisma 스키마만 작성해놓으면 
- 자동으로 GraphQL 스키마가 생성되고,
- 스키마에서 타입까지 생성됩니다. 

혼자 개발하기에 GraphQL 이 정말 편하다고 느꼈습니다.

### 한계

엔티티는 도메인, 비지니스 로직을 처리하는 계층에서 사용하는 영역이고, GraphQL 스키마는 클라이언트에게 노출되는 영역입니다. Java 에서는 Dto 계층을 따로 두어서 Entity를 클라이언트에서 분리합니다. TypeGraphQL 로 엔티티에서 바로 스키마를 생성하게 되면 기본적으로 엔티티의 모든 정보가 클라이언트에게 노출되기 때문에 주의해야합니다.

위의 코드에서도 GraphQL 스키마가 entity와 완전히 일치합니다. GraphQL 스키마가 Prisma 의 쿼리 방법까지 그대로 반영합니다.

```ts
function createVariables({ session, username, content, babyBirth, file, address }: UserContextState) {
  const data = {
    username: {
      set: username,
    },
    babyBirth: {
      set: babyBirth,
    },
    content: {
      set: content,
    },
    addresses: {
      create: address.map((a) => ({
        address: {
          connect: {
            id: parseInt(a.id),
          },
        },
      })),
    },
    files: file?.s3Key
      ? {
          create: [
            {
              file: {
                create: {
                  location: file?.s3Key,
                },
              },
            },
          ],
        }
      : undefined,
  } satisfies UserUpdateInput;
  const where = {
    email: session!.user!.email!,
  } satisfies UserWhereUniqueInput;

  return {
    data,
    where,
  };
}
```

제가 user update 시 GraphQL 에 매개변수로 넣을 객체를 생성한 코드입니다. GraphQL 스키마가 `create`, `connect` 같은 Prisma 의 쿼리 문법까지도 반영하고 있습니다. 따라서 앱 자체가 prisma에 종속되어 만들어집니다.

type-graphql의 기능을 활용하면 자동으로 생성된 스키마 중 일부분만 노출하고 내가 직접 작성한 스키마를 노출할 수 있습니다. 필드 이름을 변경하거나 필드를 없애고 추가하는 것 모두 가능합니다. 조금만 신경을 쓰면 prisma 코드가 GraphQL 에까지 삽입되는 건 막을 수 있습니다. 

그런데 저는 혼자 개발 중이라 이렇게 통합으로 개발하는 게 편해서 그냥 플러그인이 제공하는 스키마를 그대로 사용했습니다.

### WebSocket

https://www.apollographql.com/docs/react/data/subscriptions#client-side

typegrapql은 Subscription 오퍼레이션은 스키마를 생성해주지 않아서 직접 작성해야합니다.