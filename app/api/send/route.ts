
import * as React from 'react';
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: NextRequest) {
  const { nameClient, phoneClient, emailClient, commentClient } =
    await req.json();
  const data = await resend.emails.send({
    from: "Admin <onboarding@resend.dev>",
    to: ["atlascinemakz@gmail.com"],
    subject: "Заказ с сайта The developer",
    react: EmailTemplate({
      nameClient,
      phoneClient,
      emailClient,
      commentClient,
    }) as React.ReactElement,
  });
  return NextResponse.json(data);
}

<<<<<<< HEAD
=======
// import * as React from 'react';
// import { Resend } from "resend";
// import { EmailTemplate } from "@/app/components/email-template";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['rareachi@gmail.com'],
//       subject: "Заказ с сайта The developer",
//       react: EmailTemplate({ 
//         nameClient,
//        phoneClient,
//       emailClient,
//        commentClient, }) as React.ReactElement,
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json({ data });
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
>>>>>>> cb235104900976c75aeb05e8f3c0f65398e2695e
