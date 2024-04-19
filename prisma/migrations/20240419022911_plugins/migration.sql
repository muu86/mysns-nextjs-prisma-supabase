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
