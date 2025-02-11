"use client";

import "./globals.css";
import Header from "@/components/header/header";
import { GlobalStyle } from "./styles/globalsStyles";
import Footer from "@/components/footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body className={`antialiased`}>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
