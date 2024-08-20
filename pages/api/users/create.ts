import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, content } = req.body;

    try {
      const result = await pool.query(
        'INSERT INTO users (title, content) VALUES ($1, $2) RETURNING *',
        [title, content]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}