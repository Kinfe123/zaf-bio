
import { db } from "@/db"
import { contact } from "@/db/schema"
import {z} from 'zod'
import { ContactType } from "@/app/(lobby)/(main)/contact/page"
import createSubject from "react-hook-form/dist/utils/createSubject"

const bodySchema = z.object({
    name: z.string(),
    email:z.string(),
    subject:z.string(),
    message: z.string()
})
type body_ = z.infer<typeof bodySchema>
export async function POST(req:Request) {

  const resp =  (await req.json()) as {
    name: string;
    email: string;
    message: string;
    subject: boolean;
  };

  // console.log(body)
  const { email, message, name, subject } = resp

  try {
    const reqs = await db
      .insert(contact).values({ email: email, name: name, message: message, subject: subject })
    return new Response("You have successfully submitted your form", {
      status: 200,
    })
  } catch (err) {
    return new Response("Error has occured", { status: 404 })
  }
}
