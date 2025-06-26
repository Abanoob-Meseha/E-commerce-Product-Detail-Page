import type { Metadata } from "next";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export const metadata: Metadata = {
  title: "John Lewis & Partners | Department Store | Home, Fashion ...",
  description:
    "Shop latest trends and launches across Home, Fashion & Tech at John Lewis & Partners. Providing an inspiring wide range of products, for all life's moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="container-padding">{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
