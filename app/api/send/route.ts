import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);
export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { nameClient, phoneClient, emailClient, commentClient } =
    await req.json();
  const data = await resend.emails.send({
    from: "Admin <onboarding@resend.dev>",
    to: ["rareachi@gmail.com"],
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
