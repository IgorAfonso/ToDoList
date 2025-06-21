import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CardsProvider } from "@/hooks/CardsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDo List",
  description: "Simples Todo List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <CardsProvider>{children}</CardsProvider>
      </body>
    </html>
  );
}
