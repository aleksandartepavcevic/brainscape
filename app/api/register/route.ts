import EmailVerification from "@/emails/email-verification";
import { db } from "@/lib/db";
import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

const bcrypt = require("bcrypt");
const saltRounds = 10;
const baseUrl = process.env.BASE_URL
  ? `https://${process.env.BASE_URL}`
  : "http://localhost:3000";

interface CreateUserPayload {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    const body: CreateUserPayload = await req.json();

    const userExists = await db.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (userExists)
      return NextResponse.json(
        { message: "User already exists with this email." },
        { status: 409 }
      );

    const hash = await bcrypt.hash(body.password, saltRounds);

    const newUser = await db.user.create({
      data: {
        email: body.email,
        password: hash,
      },
    });

    await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: body.email,
      subject: "Welcome to Brainscape!",
      react: EmailVerification({
        username: "Alek",
        verifyLink: `${baseUrl}/verify/${newUser.id}`,
      }),
    });

    return NextResponse.json(
      {
        message:
          "User has been successfully created. Please verify your email.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
