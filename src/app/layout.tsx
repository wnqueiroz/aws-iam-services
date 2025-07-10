import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import "./globals.css";

export const metadata: Metadata = {
  title:
    "Services that work with IAM | Comprehensive list of AWS services and their IAM compatibility features",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/ico"
        href="https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico"
      />
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
