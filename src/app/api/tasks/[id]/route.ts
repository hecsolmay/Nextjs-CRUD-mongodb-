import { NextRequest, NextResponse, } from "next/server";

interface Id {
  id: string
}

interface Task extends Id{
  title: string
  content: string
}

interface UpdateTask {
  task: Partial<Task>
}

interface UpdateParams extends UpdateTask, Id {} 

interface GetParams { params: Id }
interface PutParams {params: UpdateParams}

export function GET(request: NextRequest,{params}: GetParams ){
  const { id } = params
  console.log(request)
  console.log( id)
  return NextResponse.json({
    message: 'Getting Task....'
  })
}

export function DELETE(request:NextRequest, {params}: GetParams) {
  const { id } = params
  return NextResponse.json({
    message: `Deleting Task ${id}`
  })
}

export function PUT(request:NextRequest,{params}: PutParams) {
  const {id} = params
  return NextResponse.json({
    message: `Updating Task ${id}`
  })
}