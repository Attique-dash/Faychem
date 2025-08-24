export async function GET() {
  return Response.json({
    status: 'healthy',
    message: 'Backend API is working correctly',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
}
