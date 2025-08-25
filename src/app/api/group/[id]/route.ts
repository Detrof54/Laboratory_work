import { group } from "console";
import { NextRequest } from "next/server";
import { db } from "~/server/db";

export async function PUT(request: NextRequest, {param} : {param: Promise<{id: string}>}) {
  const id = (await param).id;
  const name = await request.json()
  const group = await db.group.update({
    where: {id},
    data: {
      name,
    }
  })

  return new Response(JSON.stringify(group),{
    status: 200,
    headers: {"Content-Type" : "aplication/json"}
  })
}



