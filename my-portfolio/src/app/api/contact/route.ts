import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  // Simulate sending
  console.log("New message from:", body)

  return NextResponse.json({ status: 'ok' })
}
