import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get all environment variables that start with SMTP_
  const envVars = Object.keys(process.env)
    .filter(key => key.startsWith('SMTP_'))
    .reduce((acc, key) => {
      acc[key] = key === 'SMTP_PASSWORD' 
        ? `${process.env[key]?.length || 0} characters` 
        : process.env[key];
      return acc;
    }, {} as Record<string, string | undefined>);

  res.status(200).json({
    message: 'Environment variables loaded',
    variables: envVars,
    nodeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
} 