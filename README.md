# MySNS

`supabase`, `prisma`, `nextjs`, `graphql`로 개발한 앱입니다.

- 스프링 백엔드 서버를 두고 개발했었는데 서버리스로 구동하고 싶어서 nextjs 만으로 백엔드를 대체했습니다.
- supabase: 상시 가동되는 데이터베이스를 무료로 제공해서 사용했습니다. postgis 확장도 가능합니다.
- prisma: 스프링, JPA는 서버리스와 어울리지 않기 때문에 nextjs 만으로 앱을 구동하기 위해서 prisma를 사용했습니다.
- graphql: prisma 와 잘 어울리는 것 같아서 사용해봤습니다. 경험해보니 혼자서 개발하기에 `rest` 보다 `graphql`이 편한 것 같습니다. rest api 로 개발하려면 백엔드 서버에서 api 명세를 정하고 프론트는 그 명세에 따라서 요청 응답을 정의하고 타입까지 신경을 써줘야합니다. qraphql 은 명세를 한번 정해놓으면 클라이언트에서 선택적으로 정보를 가져올 수 있는 것이 장점입니다.

## Prisma

Javascript의 ORM 프레임워크입니다.

`supabase`도 전용 클라이언트를 제공하므로 `prisma`를 사용할 필요는 없습니다. 그런데 개인적으로 궁금해서 사용해봤습니다.


### 트랜잭션

트랜잭션 처리가 미흡하다는 글들을 봤는데 제가 최신 버전을 사용해서 그런지 부족한 점이 없는 것 같습니다. 
  
https://www.prisma.io/docs/orm/prisma-client/queries/transactions#transaction-isolation-level

- 다음의 경우에 하나의 트랜잭션에서 실행됨
  - Nested writes
    - 연결 테이블을 함께 업데이트하는 쿼리
  - Batch/bulk operations
    - updateMany, deleteMany 등
  - The $transaction API
    - `$transaction` 함수 안에서 실행되는 코드  
- 격리단계도 컨트롤 가능함
- version 컬럼 추가후 `increment` 명령어를 사용하여 직접 version 관리 가능

### 단점

- 복잡한 쿼리에는 한계가 있는 거 같습니다. 서브 쿼리 불가.
- 아직 Postgres 확장기능을 사용할 수 없습니다. 현재 `preview feature` 기능에서 extensions를 설치할 수는 있습니다. 확장기능을 사용하려면 Raw Query 로 작성해야 합니다.  PostGIS 의 Geometry 타입도 정의할 수 없습니다.

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
- PgBouncer: Postgres 에서 제공하는 커넥션풀 기능, supabase에서 기본으로 사용

supabase가 기본으로 제공하는 pgBouncer를 사용했습니다.

### 서버리스 환경에서 커넥션 풀 고갈문제

https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections#serverless-environments-faas

nextjs 를 vercel 에 배포하면 서버리스 환경에서 구동됩니다. 동시에 들어오는 요청이 늘어나서 nextjs 컨테이너가 더 생성되면 각각이 prisma container를 갖습니다.  
pgBouncer 설정에서 `connection_limit` 옵션을 `1`로 설정하고 필요에 따라 차근차근 늘려가라고 권장하고 있습니다. 만약, connection_limit 을 3으로 설정하고 람다 환경이 3개가 만들어지면 하나의 db로  3 * 3 = 9개의 connection 이 만들어 질 수가 있습니다.



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

supabase 에서 사용하는 extensions 을 스키마도 같이 맞춰서 직접 prisma 에도 반영해주어서 해결했습니다.

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

다음과 같이 resolver에 서비스 계층을 주입할 수도 있습니다.
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

엔티티는 도메인, 비지니스 로직을 처리하는 계층에서 사용하는 영역이고, GraphQL 스키마는 클라이언트에게 노출되는 영역입니다. Java 에서는 Dto 계층을 따로 두어서 Entity를 클라이언트에서 분리합니다. TypeGraphQL 로 엔티티에서 바로 스키마를 생성하게 되면 기본적으로 엔티티의 모든 정보가 클라이언트에게 노출되기 때문에 주의해야할 것 같습니다.

위의 코드에서도 GraphQL 스키마가 entity와 완전히 일치합니다. GraphQL 스키마가 prisma 의 쿼리 방법까지 그대로 반영합니다. 따라서 앱 자체가 prisma에 종속되어 만들어집니다.

```ts
// 클라이언트에서 Query를 실행하기 위해서 매개변수를 세팅하는 코드
// prisma 의 api가 클라이언트 코드에도 그대로 사용됨
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

user update 시 GraphQL 에 매개변수로 넣을 객체를 생성한 코드입니다. GraphQL 스키마가 `create`, `connect` 같은 Prisma 의 쿼리 문법까지도 반영하고 있습니다. 

type-graphql의 기능을 활용하면 자동으로 생성된 스키마 중 일부분만 노출하고 내가 직접 작성한 스키마를 노출할 수 있습니다. 필드 이름을 변경하거나 필드를 없애고 추가하는 것 모두 가능합니다. 조금만 신경을 쓰면 prisma 코드가 GraphQL 에까지 삽입되는 건 막을 수 있습니다.

### 자동생성된 스키마 확장

typegraphql 과 typegraphql-prisma 플러그인이 자동으로 생성한 스키마를 선택적으로 사용할 수도 있고, 그대로 사용하면서 확장도 가능합니다.

```ts
// 자동 생성된 ChatMessageCrudResolver 커스터마이징
@Resolver()
export class CustomChatMessageCrudResolver extends ChatMessageCrudResolver {
  @Mutation((returns) => ChatMessage)
  async createOneChatMessage(
    @Ctx() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateOneChatMessageArgs
  ): Promise<ChatMessage> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    const created: ChatMessage = await getPrismaFromContext(ctx).chatMessage.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });

    pubSub.publish('chat:message', created.chatId, created);

    return created;
  }
}
```
```ts
// 데이터베이스에서 File 은 s3 key 만 저장하기 때문에 resolver에서 presigned url 세팅하는 것으로 확장
@Resolver((of) => File)
export class CustomFileResolver {
  @FieldResolver((type) => CustomFileUrl)
  async url(@Root() file: File, @Ctx() ctx: MyContext): Promise<CustomFileUrl> {
    const urls = await getPresignedUrlForGet(file.location);
    return {
      raw: urls.raw,
      lg: urls.lg,
      md: urls.md,
      sm: urls.sm,
    };
  }
}
```
```ts
// 자동 생성된 Resolver 클래스들을 임포트해올 때 내가 확장한 클래스로 변경해서 스키마 등록
import { ChatMessageCrudResolver, resolvers } from '@/graphql/generated/type-graphql';

const filtered = resolvers.filter((r) => r.name !== ChatMessageCrudResolver.name) as NonEmptyArray<Function>;

export const schema = await buildSchema({
  resolvers: [...filtered, CustomChatMessageCrudResolver, ChatSubscriptionResolver, CustomFileUrl, CustomFileResolver],
  validate: false,
  emitSchemaFile: {
    path: path.join(process.cwd(), './graphql/schema.graphql'),
  },
  pubSub: pubSub,
});

```

### Subscription (실시간 통신 처리) 를 위한 GraphQL-SSE
GraphQL 의 Operation 은 기본적으로 Query, Mutation 인데 추가적으로 Subscription 이라는 실시간 통신도 정의합니다.

저는 yoga 서버를 사용했는데 Subscription 을 처리하기 위해서 http, websocket 기반 모두 구현 가능합니다.

https://the-guild.dev/graphql/yoga-server/docs/features/subscriptions

그런데 nextjs 를 서버리스로 배포하면 websocket 은 사용이 불가능합니다. 아니면 websocket 을 위한 별도의 서버를 두어야 할 겁니다. 그래서 http 기반으로 구현하는 `GraphQL-SSE` 를 사용했습니다. yoga 에서 권장하는 방법입니다.

https://the-guild.dev/graphql/sse/get-started

GraphQL-SSE 는 javascript EventSource API 기반으로 구동됩니다.

https://developer.mozilla.org/en-US/docs/Web/API/EventSource

#### 단점

- Websocket 과 달리 양방향 통신은 아닙니다. 서버에서 클라이언트로 메시지를 보내는 것만 가능하고 클라이언트에서 서버로 메시지를 보낼 수는 없습니다. 
- Yoga의 PubSub 모델을 사용해서 클라이언트에서 이벤트를 publish 해서 이벤트를 발동시킬 수 있습니다.

```ts
@Resolver()
export class CustomChatMessageCrudResolver extends ChatMessageCrudResolver {
  @Mutation((returns) => ChatMessage)
  async createOneChatMessage(
    @Ctx() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateOneChatMessageArgs
  ): Promise<ChatMessage> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    const created: ChatMessage = await getPrismaFromContext(ctx).chatMessage.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });

    // client 에서 create chat message Mutation 을 실행할 때 chat Id 이름의 토픽에 이벤트 발행
    pubSub.publish('chat:message', created.chatId, created);

    return created;
  }
}
```

#### Apollo Client 에서 Subscription 사용

Yoga 서버 자체는 SSE 를 사용할 시 아무 설정이 필요하지 않습니다. 그런데 앱에서 Apollo Client 로 Subscription 명령을 수행하기 위해서 별도 설정이 필요합니다.  
- `SSELink` 클래스를 생성
- Query, Mutation 은 일반 HttpLink 가 담당
- Subscription 은 `SSELink` 가 담당하도록 apollo client의 `split` 으로 요청 분리

아래는 nextjs 14 에서 apollo client 를 사용하기 위해서 `@apollo/experimental-nextjs-app-support/ssr` 의 `NextSSRApolloClient` 를 사용하고, 거기에 `SSELink` 도 붙여넣은 코드입니다.

```ts
'use client';

import { ApolloLink, FetchResult, HttpLink, Observable, Operation, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { print } from 'graphql';
import { Client, ClientOptions, createClient } from 'graphql-sse';

class SSELink extends ApolloLink {
  private client: Client;

  constructor(options: ClientOptions) {
    super();
    this.client = createClient(options);
  }

  public request(operation: Operation): Observable<FetchResult> {
    return new Observable((sink) => {
      return this.client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: sink.error.bind(sink),
        }
      );
    });
  }
}

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'http://localhost:3000/api/graphql',

    fetchOptions: { cache: 'no-store' },

  });

  export const sseLink = new SSELink({
    url: 'http://localhost:3000/api/graphql',
  
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    sseLink,
    httpLink
  );

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            splitLink,
          ])
        : splitLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
```

vercel 에 nextjs 를 배포한 뒤에도 실시간 통신이 잘 되는지는 확인필요.