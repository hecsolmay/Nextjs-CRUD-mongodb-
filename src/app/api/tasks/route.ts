import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({message: 'Ok', status: 200})
}

export function POST() {
  return NextResponse.json({
    message: 'Creating A Task'
  })
}