export async function GET() {
  return Response.json({
    status: 'ok',
    message: 'Faychem API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
}
