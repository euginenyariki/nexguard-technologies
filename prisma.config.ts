import "dotenv/config";
import { defineConfig } from "prisma/config";

// Prisma 7 no longer reads datasource URLs from schema.prisma. Migrate/deploy
// use DATABASE_URL; generate works without a live database connection.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: {
    url: process.env.DATABASE_URL || "postgresql://user:pass@localhost:5432/nexguard",
  },
});
