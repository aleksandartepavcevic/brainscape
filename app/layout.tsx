import { Navigation } from "@/features/navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brainscape",
  description: "Flashcards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} max-w-md mx-auto`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
