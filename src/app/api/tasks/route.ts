import Task from '@/models/Task'
import { ResponseError } from '@/utils/errors';
import { connectDB } from '@/utils/mongoose'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    connectDB()
    const tasks = await Task.find()
    return NextResponse.json({message: 'Ok', status: 200, tasks})
  } catch (error) {
    return ResponseError(error)
  }
}

export function POST() {
  return NextResponse.json({
    message: 'Creating A Task'
  })
}