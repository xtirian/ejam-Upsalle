import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../sass/globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const DynamicHeader = dynamic(() => import("@/components/header/index"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Clarifion",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
