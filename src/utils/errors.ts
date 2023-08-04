import { MongooseError } from "mongoose"
import { NextResponse } from "next/server"

export const ResponseError = (error: unknown) => {
  if (error instanceof MongooseError)  {
    const { message} = error

    return NextResponse.json({
      message
    }, {
      status: 400
    })
  }

  return NextResponse.json({
    message: 'Internal Server Error',
    error
  }, {
    status: 500
  })

}