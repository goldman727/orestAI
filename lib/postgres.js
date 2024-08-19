import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRESQL_URI,
});

export default pool;