# Prisma

Javascript의 ORM 프레임워크입니다.

데이버베이스를 `supabase`를 사용해볼 생각이었는데 `prisma`와 `supabase`가 잘 호환되지 않고 차라리 supabase 가 제공하는 client를 사용하는 것이 낫다는 글들을 봤습니다. 정확한 정보는 다시 확인해봐야겠습니다.


## 단점

- 복잡한 쿼리에는 한계가 있는 것 같다. 서브 쿼리 불가.
- Postgres 확장기능을 사용할 수 없다. 확장기능을 사용하려면 Raw Query 로 작성해야한다. PostGIS 의 Geometry 타입도 정의할 수 없다.

```
model Address {
  id   Int     @id @default(autoincrement())
  geoP    Unsupported("geometry(Geometry, 5179)") @map("geo_p")
  geoS    Unsupported("geometry(Geometry, 4326)") @map("geo_s")
  centerP Unsupported("geometry(Point, 5179)")    @map("center_p")
  centerS Unsupported("geometry(Point, 4326)")    @map("center_s")
}

```
다음과 같이 Unsupported 으로 타입을 정의해야 한다. 그러므로 Geometry 타입을 코드로 다룰 수가 없다.

## 장점

- GraphQL 과 통합하기가 좋다. TypeGraphQL 이라는 라이브러리의 도움을 받아야한다.
