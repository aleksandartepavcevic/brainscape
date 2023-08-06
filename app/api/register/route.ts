import { SignUpFormValues } from "@/components/SignUpForm/SingUpForm.types";
import EmailVerification from "@/emails/email-verification";
import { db } from "@/lib/db";
import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

const bcrypt = require("bcrypt");
const saltRounds = 10;
const baseUrl = process.env.BASE_URL
  ? `https://${process.env.BASE_URL}`
  : "http://localhost:3000";

export async function POST(req: Request) {
  try {
    const body: SignUpFormValues = await req.json();

    const userExistsWithEmail = await db.user.findFirst({
      where: {
        email: body.email,
      },
    });

    const userExistsWithUsername = await db.user.findFirst({
      where: {
        username: body.username,
      },
    });

    if (userExistsWithEmail)
      return NextResponse.json(
        { message: "User already exists with this email.", field: "email" },
        { status: 409 }
      );

    if (userExistsWithUsername)
      return NextResponse.json(
        { message: "Username is already taken.", field: "username" },
        { status: 409 }
      );

    const hash = await bcrypt.hash(body.password, saltRounds);

    const newUser = await db.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hash,
      },
    });

    await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: body.email,
      subject: "Welcome to Brainscape!",
      react: EmailVerification({
        username: body.username,
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
