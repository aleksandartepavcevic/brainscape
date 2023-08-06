import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailVerificationProps {
  username?: string;
  verifyLink?: string;
}

const baseUrl = process.env.BASE_URL ? `https://${process.env.BASE_URL}` : "";

const EmailVerification = ({
  username = "Alek",
  verifyLink = "https://brainscape.vercel.app",
}: EmailVerificationProps) => (
  <Html>
    <Head />
    <Preview>Welcome to the Brainscape! Verify your email.</Preview>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
          <Section className="mt-[32px]">
            <Img
              src={`${baseUrl}/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.21564271.png`}
              width="150"
              height="150"
              alt="Brainscape"
              style={{ objectFit: "cover" }}
              className="my-0 mx-auto"
            />
          </Section>
          <Heading className="text-black text-[24px] font-normal text-center p-0 mb-[30px] mx-0">
            Welcome <strong>{username}</strong> to <strong>Brainscape</strong>
          </Heading>
          <Text className="text-black text-[14px] leading-[24px]">
            Hello {username},
          </Text>
          <Text className="text-black text-[14px] leading-[24px]">
            in order to <strong>verify your account</strong>, please click the
            button below.
          </Text>

          <Section className="text-center">
            <Button
              className={
                "focus:outline-focus outline-sky-500 transition-colors duration-300 rounded-lg bg-sky-500 text-white focus:bg-sky-700 hover:bg-sky-700 p-3 text-md mt-3"
              }
              href={verifyLink}
            >
              Verify your account
            </Button>
          </Section>
          <Text className="text-black text-[14px] leading-[24px]">
            or copy and paste this URL into your browser:{" "}
            <Link href={verifyLink} className="text-blue-600 no-underline">
              {verifyLink}
            </Link>
          </Text>
          <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          <Text className="text-[#666666] text-[12px] leading-[24px]">
            This invitation was intended for{" "}
            <span className="text-black">{username}</span>.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailVerification;
