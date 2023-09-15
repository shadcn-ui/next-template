import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json({ data: 'Got you' });
}
export async function POST(req: Request) {
  return NextResponse.json({ data: 'Hello from @sohanemon' });
}
