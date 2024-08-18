import { NextApiRequest, NextApiResponse } from 'next';

const development = 'Orest AI';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ development: {development} });
}