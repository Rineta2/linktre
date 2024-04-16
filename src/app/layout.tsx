import type { Metadata } from "next";

import "./globals.scss";

import Head from "next/head";

export const metadata: Metadata = {
  title: "rineta.io",
  description: "Linktree",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Head>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
