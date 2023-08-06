import { db } from "@/lib/db";
import { NextResponse } from "next/server";

const bcrypt = require("bcrypt");
const saltRounds = 10;

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

    await bcrypt.hash(
      body.password,
      saltRounds,
      async (err: any, hash: any) => {
        await db.user.create({
          data: {
            email: body.email,
            password: hash,
          },
        });
      }
    );

    return NextResponse.json(
      {
        message:
          "User has been successfully created. Please confirm your email.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
