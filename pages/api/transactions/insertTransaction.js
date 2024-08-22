import { query } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;
    const result = await query(
      'INSERT INTO transactions (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}