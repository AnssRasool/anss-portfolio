---
title: "Dummy Article 1"
date: "Mar 2026"
readTime: "5 min read"
summary: "A practical guide to database indexing, query optimization, and connection pooling in production."
tags: ["Databases", "Performance", "SQL"]
---

## 1. Indexing Strategies Under Burst Loads

Compound B-Tree indices provide sub-millisecond lookups for filtered equality queries, but poorly chosen column ordering creates redundant leaf traversal.

We evaluate EXPLAIN ANALYZE queries across high-traffic PostgreSQL tables to highlight the impact of index prefixing.

```sql
CREATE INDEX CONCURRENTLY idx_orders_tenant_status_created 
ON orders (tenant_id, status, created_at DESC);
```

## 2. Managing Connection Pools

Sizing PgBouncer connection pools correctly prevents server thread starvation and keeps CPU utilization under predictable bounds during traffic surges.
