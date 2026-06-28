import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STUWO Org",
  description: "Welcome to STUWO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
